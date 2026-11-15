# Hardware Wiring Guide & Circuit Schematic (Smart Krishi-Jal 3.0)

## 1. Complete Components Checklist
1. **ESP32 DevKit V1** (30-pin or 38-pin version).
2. **Capacitive Soil Moisture Sensor v1.2** (Corrosion resistant, analog output 0-3.3V).
3. **DHT22 (AM2302) Temperature & Humidity Sensor** (includes 10k pull-up resistor).
4. **YF-S201 Hall-Effect Water Flow Sensor** (Inline 1/2" pipe flow meter).
5. **PC817 Optocoupler or 5V Phone Charger Module** (For Grid Power / Light Aayi-Gayi Detection).
6. **1-Channel 5V/12V Relay Module with Optocoupler Isolation** (High/Low trigger selectable).
7. **12V DC Submersible / Diaphragm Water Pump**.
8. **12V DC 2A/3A Power Supply / Battery**.
9. **DC-DC Step-Down Buck Converter (LM2596 or MP1584EN)**: Steps down 12V to 5V DC for ESP32 and Relay.
10. **1N4007 Diode (Flyback Diode)**: Reverse-biased across 12V DC motor terminals.
11. Breadboard / PCB, Jumper Wires.

---

## 2. Power Supply & Signal Distribution

```
[12V 2A DC Power Source]
   ├── (+) 12V ───► Buck Converter IN (+) ──────► Buck OUT (+) [5V DC] ────► ESP32 'VIN' Pin
   │                                                                   ├──► Relay Module 'VCC'
   │                                                                   └──► YF-S201 Flow Sensor 'VCC' (Red)
   │
   ├── (+) 12V ───► Relay Terminal 'COM' (Common)
   │                Relay Terminal 'NO' (Normally Open) ──► 12V Motor (+) Wire
   │
   └── (-) GND ───► Buck Converter IN (-) ──────► Buck OUT (-) [GND] ──────► ESP32 'GND' Pin
                    (COMMON GROUND)                                   ├──► Relay Module 'GND'
                                                                      ├──► Soil Sensor 'GND'
                                                                      ├──► DHT22 'GND'
                                                                      ├──► Flow Sensor 'GND' (Black)
                                                                      └──► 12V Motor (-) Wire
```

---

## 3. Comprehensive Pin-to-Pin Connection Table

| कंपोनेंट (Component) | सेंसर पिन | ESP32 पिन | प्रकार / प्रोटोकॉल | विवरण (Notes) |
| :--- | :--- | :--- | :--- | :--- |
| **Capacitive Soil Sensor** | VCC | **3.3V** | Power | हमेशा 3.3V से पावर दें ताकि ADC सुरक्षित रहे |
| | GND | **GND** | Ground | सिस्टम कॉमन ग्राउंड |
| | AOUT | **GPIO 34** | ADC1_CH6 | 12-बिट एनालॉग इनपुट (0 - 4095) |
| **DHT22 Temp & Humidity** | VCC | **3.3V** | Power | पावर सप्लाई |
| | GND | **GND** | Ground | सिस्टम ग्राउंड |
| | DATA | **GPIO 4** | 1-Wire Digital | 10k पुल-अप रेसिस्टर के साथ |
| **YF-S201 Flow Sensor** | VCC (Red) | **5V** | Power | 5V DC सप्लाई |
| | GND (Black) | **GND** | Ground | सिस्टम ग्राउंड |
| | Signal (Yellow) | **GPIO 18** | External Interrupt | पल्स फ्रीक्वेंसी ($F = 7.5 \times Q$) |
| **Grid Power Monitor** | Collector (+) | **GPIO 19** | Digital Input | आंतरिक पुल-अप (Internal Pull-Up); बिजली होने पर LOW |
| (PC817 Optocoupler) | Emitter (-) | **GND** | Ground | सिस्टम ग्राउंड |
| **1-Channel Relay** | VCC | **5V** | Power | 5V बक कन्वर्टर से |
| | GND | **GND** | Ground | सिस्टम ग्राउंड |
| | IN | **GPIO 26** | Digital Output | एक्टिव LOW सिग्नल (LOW = ON, HIGH = OFF) |
| **Status LED** | Anode (+) | **GPIO 2** | Digital Output | ESP32 इनबिल्ट / एक्सटर्नल ब्लू एलईडी |

---

## 4. सुरक्षा एवं ड्राई-रन प्रणालियाँ (Safety & Dry-Run Rules)

1. **YF-S201 वाटर फ्लो सेंसर:**
   - इसे 12V वाटर पंप के आउटलेट पाइप पर सीधे लगाएं। तीर के निशान की दिशा में पानी बहना चाहिए।
   - **ड्राई-रन सेफ्टी लॉजिक:** यदि मोटर चालू है और 25 सेकंड तक फ्लो सेंसर से कोई पल्स नहीं आती (Flow = 0 L/min), तो ESP32 मोटर को तुरंत बंद कर देगा और ऐप में अलार्म बजाएगा ताकि पंप की मोटर जलने से बच सके।

2. **ग्रिड पावर (बिजली लाइन) डिटेक्शन:**
   - खेत की 220V बिजली लाइन से एक पुराना 5V फोन एडॉप्टर या PC817 ऑटो-कपलर सर्किट जोड़ें।
   - जब खेत में ट्रांसफार्मर से बिजली आएगी, तो `GPIO 19` LOW हो जाएगा और ऐप में **"बिजली उपलब्ध है"** का हरा सिग्नल दिखेगा। बिजली कटने पर मोटर स्वतः सुरक्षित बंद हो जाएगी।

3. **फ्लाईबैक डायोड:**
   - 12V मोटर के दोनों टर्मिनल्स पर एक `1N4007` डायोड अवश्य लगाएं (सिल्वर पट्टी मोटर के पॉजिटिव पर और दूसरा सिरा नेगेटिव पर)। यह मोटर बंद होते समय निकलने वाले स्पार्क से ESP32 को रीस्टार्ट होने से बचाता है।
