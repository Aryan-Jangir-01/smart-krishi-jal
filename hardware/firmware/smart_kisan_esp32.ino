/*
 * =========================================================================================
 * Project: Smart Krishi-Jal 3.0 (Enterprise Precision AI & IoT Agriculture System)
 * Hardware: ESP32 DevKit V1
 * Pins:
 *   - GPIO 34: Capacitive Soil Moisture Sensor (Analog In)
 *   - GPIO 4:  DHT22 Temperature & Humidity (1-Wire Digital)
 *   - GPIO 18: YF-S201 Water Flow Sensor (Hardware Interrupt Pulse In)
 *   - GPIO 19: Grid Power Monitor (PC817 Optocoupler - Light Aayi/Gayi)
 *   - GPIO 26: 12V Water Pump Relay Control (Active LOW)
 *   - GPIO 2:  Status LED
 * Features:
 *   - Real-time Flow Measurement in L/min & Total Liters Delivered
 *   - Dry-Run Motor Burnout Protection (Auto-off if no water flow within 25s)
 *   - Grid Power Failure Detection & Auto Safe Shutoff
 *   - Timed Burst Irrigation (10m, 20m, 30m)
 *   - Non-Volatile Flash Persistence (NVS) for Crop Profile & Thresholds
 *   - High-Speed REST API with CORS & mDNS (http://smartkisan.local)
 * =========================================================================================
 */

#include <WiFi.h>
#include <WebServer.h>
#include <ArduinoJson.h>
#include <DHT.h>
#include <Preferences.h>
#include <ESPmDNS.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>

// --------------------------- SUPABASE CLOUD CONFIG ---------------------
const char* SUPABASE_HOST = "https://putzumkxfhsmxagozsvj.supabase.co";
const char* SUPABASE_KEY  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1dHp1bWt4ZmhzbXhhZ296c3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3NzI2NzksImV4cCI6MjEwMDM0ODY3OX0.JNUn9z1ZxLEKg4q_-SH2VjoDzzJs7VJ_AY9NyENwNAM";

unsigned long lastSupabaseSyncTime = 0;
const unsigned long SUPABASE_SYNC_INTERVAL = 10000; // Poll Supabase every 10s

// --------------------------- PIN DEFINITIONS ---------------------------
#define SOIL_PIN        34   // ADC1_CH6 (Capacitive Moisture Sensor)
#define DHT_PIN         4    // DHT22 Digital Data Pin
#define FLOW_SENSOR_PIN 18   // YF-S201 Water Flow Sensor Pulse (Interrupt)
#define GRID_POWER_PIN  19   // Grid Voltage Monitor (PC817 Optocoupler - LOW = Power ON)
#define RELAY_PIN       26   // 12V Motor Relay Control Pin
#define STATUS_LED_PIN  2    // ESP32 Onboard Blue LED

// --------------------------- SENSOR CONFIG -----------------------------
#define DHTTYPE         DHT22
DHT dht(DHT_PIN, DHTTYPE);

const int DRY_ADC_VAL   = 3200;  // Dry air (~0% moisture)
const int WET_ADC_VAL   = 1450;  // Pure water (~100% moisture)

#define RELAY_ACTIVE_LOW true

// Safety Limits
const unsigned long MAX_PUMP_RUN_MS = 45UL * 60UL * 1000UL; // 45m emergency cutoff
const unsigned long DRY_RUN_GRACE_MS = 25UL * 1000UL;        // 25s dry-run cutoff
const unsigned long SENSOR_READ_INTERVAL = 2500;            // Read every 2.5s

// --------------------------- FLOW SENSOR ISR ---------------------------
volatile unsigned long flowPulseCount = 0;
void IRAM_ATTR flowPulseCounter() {
  flowPulseCount++;
}

// --------------------------- WI-FI CONFIG ------------------------------
const char* WIFI_SSID     = "SmartKisan_Farm";
const char* WIFI_PASSWORD = "kisanpassword123";

// --------------------------- GLOBAL STATE ------------------------------
WebServer server(80);
Preferences prefs;

struct SystemState {
  float soilMoisturePct  = 0.0;
  float temperatureC     = 0.0;
  float humidityPct      = 0.0;
  int   rawAdcValue      = 0;
  
  // Motor & Flow
  bool  motorRunning     = false;
  bool  autoMode         = true;
  float flowRateLpm      = 0.0;
  float totalLiters      = 320.0;
  
  // Crop & Irrigation Thresholds
  int   minMoistureThreshold = 40;
  int   maxMoistureThreshold = 70;
  char  currentCrop[32]      = "wheat";
  
  // Power & Safety Alarms
  bool  gridPowerAvailable   = true;
  bool  dryRunAlarm          = false;
  bool  sensorFault          = false;
  bool  emergencyStop        = false;
  
  unsigned long pumpStartTime    = 0;
  unsigned long lastFlowPulseAt  = 0;
  
  // Burst Timer
  unsigned long burstRemainingSec = 0;
  bool  burstActive              = false;
} state;

unsigned long lastSensorReadTime = 0;
unsigned long lastSecondTick     = 0;

// --------------------------- MOTOR CONTROL & SAFETY --------------------

void setMotor(bool turnOn, const char* reason = "") {
  if (turnOn) {
    if (state.emergencyStop || state.sensorFault || state.dryRunAlarm) {
      Serial.println(F("[SAFETY] Motor start blocked: Active Safety Alarm!"));
      return;
    }
    if (!state.gridPowerAvailable) {
      Serial.println(F("[SAFETY] Motor start blocked: No Grid Power in field!"));
      return;
    }
    if (!state.motorRunning) {
      state.motorRunning = true;
      state.pumpStartTime = millis();
      state.lastFlowPulseAt = millis();
      digitalWrite(RELAY_PIN, RELAY_ACTIVE_LOW ? LOW : HIGH);
      digitalWrite(STATUS_LED_PIN, HIGH);
      Serial.print(F("[MOTOR ON] "));
      Serial.println(reason);
    }
  } else {
    if (state.motorRunning) {
      state.motorRunning = false;
      state.burstActive = false;
      state.flowRateLpm = 0.0;
      digitalWrite(RELAY_PIN, RELAY_ACTIVE_LOW ? HIGH : LOW);
      digitalWrite(STATUS_LED_PIN, LOW);
      Serial.print(F("[MOTOR OFF] "));
      Serial.println(reason);
    }
  }
}

float readSoilMoisture() {
  const int SAMPLES = 10;
  long sum = 0;
  for (int i = 0; i < SAMPLES; i++) {
    sum += analogRead(SOIL_PIN);
    delay(5);
  }
  int avgAdc = sum / SAMPLES;
  state.rawAdcValue = avgAdc;

  if (avgAdc > 4000 || avgAdc < 200) {
    state.sensorFault = true;
  } else {
    state.sensorFault = false;
  }

  float pct = ((float)(DRY_ADC_VAL - avgAdc) / (float)(DRY_ADC_VAL - WET_ADC_VAL)) * 100.0;
  if (pct < 0.0) pct = 0.0;
  if (pct > 100.0) pct = 100.0;
  return pct;
}

void readEnvironmentalSensors() {
  state.soilMoisturePct = readSoilMoisture();
  float t = dht.readTemperature();
  float h = dht.readHumidity();
  if (!isnan(t)) state.temperatureC = t;
  if (!isnan(h)) state.humidityPct = h;

  // Grid Power (LOW = Power Present when using Optocoupler)
  state.gridPowerAvailable = (digitalRead(GRID_POWER_PIN) == LOW);
  if (!state.gridPowerAvailable && state.motorRunning) {
    setMotor(false, "GRID POWER FAILED! Safe shutdown");
  }
}

void checkDryRunSafety() {
  if (state.motorRunning) {
    // If running past grace period but flow rate is zero (no pulses)
    unsigned long runDuration = millis() - state.pumpStartTime;
    if (runDuration >= DRY_RUN_GRACE_MS && state.flowRateLpm < 0.3) {
      setMotor(false, "DRY RUN DETECTED! No water flow in pipe. Motor saved from burnout");
      state.dryRunAlarm = true;
    }

    // Maximum 45 minute runtime limit
    if (runDuration >= MAX_PUMP_RUN_MS) {
      setMotor(false, "SAFETY TIMEOUT! Max allowed runtime 45m exceeded");
      state.emergencyStop = true;
    }
  }
}

void checkAutonomousIrrigation() {
  if (!state.autoMode || state.emergencyStop || state.sensorFault || state.dryRunAlarm || state.burstActive) return;

  if (state.soilMoisturePct < state.minMoistureThreshold) {
    if (!state.motorRunning) {
      setMotor(true, "Moisture below crop stage threshold");
    }
  } else if (state.soilMoisturePct >= state.maxMoistureThreshold) {
    if (state.motorRunning) {
      setMotor(false, "Target crop stage moisture achieved");
    }
  }
}

// --------------------------- REST API ----------------------------------

void setCorsHeaders() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.sendHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  server.sendHeader("Access-Control-Allow-Headers", "Content-Type");
}

void handleOptions() {
  setCorsHeaders();
  server.send(204);
}

void handleGetStatus() {
  setCorsHeaders();
  StaticJsonDocument<896> doc;
  
  doc["soil_moisture"]     = round(state.soilMoisturePct * 10.0) / 10.0;
  doc["temperature"]       = round(state.temperatureC * 10.0) / 10.0;
  doc["humidity"]          = round(state.humidityPct * 10.0) / 10.0;
  doc["motor_running"]     = state.motorRunning;
  doc["auto_mode"]         = state.autoMode;
  doc["flow_rate_lpm"]     = round(state.flowRateLpm * 10.0) / 10.0;
  doc["liters_delivered"]  = round(state.totalLiters * 10.0) / 10.0;
  doc["min_threshold"]     = state.minMoistureThreshold;
  doc["max_threshold"]     = state.maxMoistureThreshold;
  doc["current_crop"]      = state.currentCrop;
  doc["grid_power"]        = state.gridPowerAvailable;
  doc["dry_run_alarm"]     = state.dryRunAlarm;
  doc["emergency_stop"]    = state.emergencyStop;
  doc["sensor_fault"]      = state.sensorFault;
  doc["burst_remaining"]   = state.burstRemainingSec;
  doc["uptime_sec"]        = millis() / 1000;
  doc["rssi"]              = WiFi.RSSI();

  String response;
  serializeJson(doc, response);
  server.send(200, "application/json", response);
}

void handlePostControl() {
  setCorsHeaders();
  if (!server.hasArg("plain")) {
    server.send(400, "application/json", "{\"error\":\"Missing body\"}");
    return;
  }

  StaticJsonDocument<512> doc;
  DeserializationError err = deserializeJson(doc, server.arg("plain"));
  if (err) {
    server.send(400, "application/json", "{\"error\":\"Invalid JSON\"}");
    return;
  }

  if (doc.containsKey("auto_mode")) {
    state.autoMode = doc["auto_mode"];
    prefs.putBool("autoMode", state.autoMode);
  }

  if (doc.containsKey("motor")) {
    bool requested = doc["motor"];
    if (!state.autoMode) {
      setMotor(requested, "Manual Web Command");
    }
  }

  if (doc.containsKey("burst_seconds")) {
    unsigned long burstSec = doc["burst_seconds"];
    if (burstSec > 0) {
      state.burstRemainingSec = burstSec;
      state.burstActive = true;
      state.autoMode = false;
      setMotor(true, "Timed Burst Command");
    }
  }

  if (doc.containsKey("min_threshold")) {
    state.minMoistureThreshold = doc["min_threshold"];
    prefs.putInt("minThresh", state.minMoistureThreshold);
  }
  if (doc.containsKey("max_threshold")) {
    state.maxMoistureThreshold = doc["max_threshold"];
    prefs.putInt("maxThresh", state.maxMoistureThreshold);
  }
  if (doc.containsKey("crop")) {
    strlcpy(state.currentCrop, doc["crop"], sizeof(state.currentCrop));
    prefs.putString("crop", state.currentCrop);
  }
  if (doc.containsKey("reset_alarms") && doc["reset_alarms"] == true) {
    state.emergencyStop = false;
    state.dryRunAlarm = false;
    Serial.println(F("[SAFETY] All Safety Alarms Cleared by farmer!"));
  }

  handleGetStatus();
}

// --------------------------- SUPABASE CLOUD SYNC ------------------------
void syncWithSupabase() {
  if (WiFi.status() != WL_CONNECTED) return;

  WiFiClientSecure client;
  client.setInsecure(); // SSL certificate bypass for IoT devices

  HTTPClient https;
  // 1. Fetch remote commands (e.g. from farmer's mobile app via Supabase)
  String getUrl = String(SUPABASE_HOST) + "/rest/v1/motor_controls?id=eq.1&select=motor_command,mode";

  if (https.begin(client, getUrl)) {
    https.addHeader("apikey", SUPABASE_KEY);
    https.addHeader("Authorization", String("Bearer ") + SUPABASE_KEY);
    https.addHeader("Content-Type", "application/json");

    int httpCode = https.GET();
    if (httpCode == HTTP_CODE_OK) {
      String payload = https.getString();
      StaticJsonDocument<256> doc;
      DeserializationError err = deserializeJson(doc, payload);
      if (!err && doc.size() > 0) {
        const char* cmd = doc[0]["motor_command"];
        const char* mode = doc[0]["mode"];

        if (mode && strcmp(mode, "MANUAL") == 0) {
          state.autoMode = false;
        } else if (mode && strcmp(mode, "AUTO") == 0) {
          state.autoMode = true;
        }

        if (cmd && strcmp(cmd, "ON") == 0 && !state.motorRunning && !state.dryRunAlarm) {
          setMotor(true, "Cloud Remote (Supabase)");
        } else if (cmd && strcmp(cmd, "OFF") == 0 && state.motorRunning) {
          setMotor(false, "Cloud Remote (Supabase)");
        }
      }
    }
    https.end();
  }

  // 2. Push telemetry to sensor_telemetry table
  String postUrl = String(SUPABASE_HOST) + "/rest/v1/sensor_telemetry";
  if (https.begin(client, postUrl)) {
    https.addHeader("apikey", SUPABASE_KEY);
    https.addHeader("Authorization", String("Bearer ") + SUPABASE_KEY);
    https.addHeader("Content-Type", "application/json");
    https.addHeader("Prefer", "return=minimal");

    StaticJsonDocument<256> telemetryDoc;
    telemetryDoc["moisture_pct"] = state.soilMoisturePct;
    telemetryDoc["temperature_c"] = state.temperatureC;
    telemetryDoc["humidity_pct"] = state.humidityPct;
    telemetryDoc["flow_rate_lpm"] = state.flowRateLpm;
    telemetryDoc["total_water_litres"] = state.totalLiters;
    telemetryDoc["motor_state"] = state.motorRunning;
    telemetryDoc["grid_power"] = state.gridPowerAvailable;

    String jsonString;
    serializeJson(telemetryDoc, jsonString);
    https.POST(jsonString);
    https.end();
  }
}

// --------------------------- SETUP & LOOP -------------------------------

void setup() {
  Serial.begin(115200);
  delay(400);
  Serial.println(F("\n=============================================="));
  Serial.println(F("   Smart Krishi-Jal 3.0: Enterprise IoT Agri  "));
  Serial.println(F("=============================================="));

  pinMode(RELAY_PIN, OUTPUT);
  pinMode(STATUS_LED_PIN, OUTPUT);
  pinMode(GRID_POWER_PIN, INPUT_PULLUP);
  pinMode(FLOW_SENSOR_PIN, INPUT_PULLUP);

  digitalWrite(RELAY_PIN, RELAY_ACTIVE_LOW ? HIGH : LOW);
  digitalWrite(STATUS_LED_PIN, LOW);

  // Attach flow sensor interrupt
  attachInterrupt(digitalPinToInterrupt(FLOW_SENSOR_PIN), flowPulseCounter, RISING);

  analogReadResolution(12);
  dht.begin();

  // Load preferences
  prefs.begin("kisan_cfg", false);
  state.autoMode = prefs.getBool("autoMode", true);
  state.minMoistureThreshold = prefs.getInt("minThresh", 40);
  state.maxMoistureThreshold = prefs.getInt("maxThresh", 70);
  String savedCrop = prefs.getString("crop", "wheat");
  strlcpy(state.currentCrop, savedCrop.c_str(), sizeof(state.currentCrop));

  // Connect Wi-Fi
  Serial.printf("[WIFI] Connecting to: %s\n", WIFI_SSID);
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  int attempts = 0;
  while (WiFi.status() != WL_CONNECTED && attempts < 25) {
    delay(500);
    Serial.print(".");
    digitalWrite(STATUS_LED_PIN, !digitalRead(STATUS_LED_PIN));
    attempts++;
  }

  if (WiFi.status() == WL_CONNECTED) {
    Serial.printf("\n[WIFI] Connected! IP: %s\n", WiFi.localIP().toString().c_str());
    digitalWrite(STATUS_LED_PIN, LOW);
    if (MDNS.begin("smartkisan")) {
      Serial.println(F("[mDNS] Responder active at http://smartkisan.local"));
    }
  } else {
    Serial.println(F("\n[WIFI] Wi-Fi not found. Starting Hotspot: SmartKisan-ESP32"));
    WiFi.mode(WIFI_AP);
    WiFi.softAP("SmartKisan-ESP32", "12345678");
  }

  server.on("/api/status", HTTP_OPTIONS, handleOptions);
  server.on("/api/status", HTTP_GET, handleGetStatus);
  server.on("/api/control", HTTP_OPTIONS, handleOptions);
  server.on("/api/control", HTTP_POST, handlePostControl);
  server.begin();
  Serial.println(F("[HTTP] REST Server Active on Port 80"));

  readEnvironmentalSensors();
}

void loop() {
  server.handleClient();

  unsigned long currentMillis = millis();

  // 1-Second Tick: Calculate Flow Rate & Liters
  if (currentMillis - lastSecondTick >= 1000) {
    lastSecondTick = currentMillis;

    // YF-S201 Pulse formula: Flow Rate (L/min) = Pulse frequency / 7.5
    noInterrupts();
    unsigned long pulses = flowPulseCount;
    flowPulseCount = 0;
    interrupts();

    if (state.motorRunning) {
      state.flowRateLpm = (float)pulses / 7.5;
      // If sensor simulator is active or physical pulses present
      float deltaLiters = (state.flowRateLpm / 60.0);
      if (deltaLiters > 0) state.totalLiters += deltaLiters;

      // Burst countdown
      if (state.burstActive) {
        if (state.burstRemainingSec > 0) {
          state.burstRemainingSec--;
        } else {
          setMotor(false, "Burst Timer Expired");
          state.autoMode = true;
        }
      }
    } else {
      state.flowRateLpm = 0.0;
    }

    checkDryRunSafety();
  }

  // Periodic Environmental Polling
  if (currentMillis - lastSensorReadTime >= SENSOR_READ_INTERVAL) {
    lastSensorReadTime = currentMillis;
    readEnvironmentalSensors();
    checkAutonomousIrrigation();
  }

  // Periodic Supabase Cloud Sync
  if (currentMillis - lastSupabaseSyncTime >= SUPABASE_SYNC_INTERVAL) {
    lastSupabaseSyncTime = currentMillis;
    syncWithSupabase();
  }
}
