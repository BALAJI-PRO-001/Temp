#include <WiFi.h>
#include <Firebase_ESP_Client.h>

// Replace with your network credentials
#define WIFI_SSID "Your_SSID"
#define WIFI_PASSWORD "Your_PASSWORD"

// Replace with your Firebase credentials
#define FIREBASE_PROJECT_ID "Your_Firebase_Project_ID"
#define FIREBASE_API_KEY "Your_Firebase_API_KEY"
#define DATABASE_URL "https://Your_Database_URL"

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

// Define the sensor pin
#define MOISTURE_SENSOR_PIN 34 // Use an analog pin for the sensor

void setup() {
  Serial.begin(115200);
  
  // Connect to Wi-Fi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("\nWi-Fi Connected!");

  // Configure Firebase
  config.api_key = FIREBASE_API_KEY;
  config.database_url = DATABASE_URL;
  Firebase.begin(&config, &auth);
}

void loop() {
  // Read soil moisture value
  int moistureValue = analogRead(MOISTURE_SENSOR_PIN);
  float moisturePercent = map(moistureValue, 4095, 0, 0, 100); // Map analog value to percentage

  Serial.print("Soil Moisture: ");
  Serial.print(moisturePercent);
  Serial.println("%");

  // Send data to Firebase
  if (Firebase.RTDB.setFloat(&fbdo, "/SoilMoisture", moisturePercent)) {
    Serial.println("Data posted to Firebase successfully.");
  } else {
    Serial.print("Error posting to Firebase: ");
    Serial.println(fbdo.errorReason());
  }

  delay(5000); // Post data every 5 seconds
}
