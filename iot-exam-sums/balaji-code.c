#include "DHT.h"

// Define the pin and sensor type
#define DHTPIN 4       // Pin connected to the DHT sensor
#define DHTTYPE DHT11  // DHT11 or DHT22
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200); // Initialize the Serial Monitor
  dht.begin();          // Start the DHT sensor
  Serial.println("Reading temperature...");
}

void loop() {
  float temperature = dht.readTemperature(); // Read temperature in Celsius

  if (isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println("°C");

  delay(2000); // Wait for 2 seconds before the next reading
}
