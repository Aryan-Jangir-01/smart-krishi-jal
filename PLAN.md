# Smart Krishi-Jal 3.0 (Enterprise Precision Agriculture Platform)

## 1. Complete System Architecture & Advanced Specifications

This platform integrates high-precision hardware automation with intelligent farmer-centric software:

### 1.1 In-Field Hardware Unit (ESP32)
- **Microcontroller:** ESP32 DevKit V1 (Dual-Core 240MHz, Wi-Fi 802.11 b/g/n).
- **Sensors:**
  - **Capacitive Soil Moisture Sensor v1.2:** Analog input on `GPIO 34` (ADC1).
  - **DHT22 (AM2302):** Temperature & Relative Humidity on `GPIO 4`.
  - **YF-S201 Water Flow Sensor:** Hall-effect pulse sensor on `GPIO 18` (Hardware Interrupt). Measures flow in Liters/Minute and triggers **Dry-Run Shutdown** if motor runs without water.
  - **Grid Power Monitor (बिजली आई/गई संसूचक):** Optocoupler-isolated digital input on `GPIO 19`. Detects whether 220V/440V farm power line is active or cut.
- **Actuators:**
  - 1-Channel Optocoupler Relay on `GPIO 26` driving the 12V DC water pump.
  - Status LED on `GPIO 2`.
- **Power System:** 12V DC power bus with LM2596 buck converter (12V -> 5V) and 1N4007 flyback diode protection.

### 1.2 Edge Firmware Intelligence
- **Interrupt-driven flow rate measurement:** Calculates pulse frequency to compute accurate volume (Liters).
- **Dry-Run Auto Protection:** Shuts off pump within 25 seconds if motor is ON but flow pulses remain zero, preventing motor burnout.
- **Grid Power Event Management:** Automatically suspends motor commands when grid power is lost and alerts farmer.
- **Non-Volatile Storage (NVS):** Retains crop profile, thresholds, and calibration through blackouts.
- **REST API + CORS + mDNS:** High-speed JSON endpoints for local and cloud mobile apps.

### 1.3 Mobile Application (Bilingual PWA)
- **Bilingual Interface:** Instant seamless switching between Hindi (हिंदी) and English across all screens, charts, and voice synthesis.
- **Digital Twin:** Live animated canvas showing 2D soil horizon, root hydration, and water droplets.
- **Kisan-Vani AI Voice Assistant:** Spoken audio announcements for motor states, alerts, weather, and disease warnings.
- **AI Leaf Disease Doctor:** Live camera / photo upload scanner that analyzes crop leaf symptoms and provides chemical/organic spray prescriptions.
- **Live Mandi Bhav (APMC Rates):** Real-time daily market price ticker for active crops across key agricultural mandis.
- **WhatsApp Shareable Farm Digest:** 1-click formatted farm report generated directly for WhatsApp sharing.
- **Eco ROI Meter:** Tracks water savings against conventional flooding and electricity consumption.
