import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Battery from 'expo-battery';

export default function App() {
  const [location, setLocation] = useState(null);
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [status, setStatus] = useState('म चार्ज चाहन्छु');

  useEffect(() => {
    (async () => {
      // Location permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('लोकेसन अनुमति आवश्यक छ');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      // Battery level
      const battery = await Battery.getBatteryLevelAsync();
      setBatteryLevel(Math.round(battery * 100));
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wireless Charge Sharing</Text>
      <Text>ब्याट्री: {batteryLevel ? batteryLevel + '%' : 'लोड हुँदैछ...'}</Text>
      <Text>स्थिति: {status}</Text>
      <Button title="स्थिति परिवर्तन गर्नुहोस्" onPress={() =>
        setStatus(prev => prev === 'म चार्ज चाहन्छु' ? 'म चार्ज दिन सक्छु' : 'म चार्ज चाहन्छु')} />
      <Text style={{ marginTop: 20 }}>
        {location
          ? अक्षांश: ${location.coords.latitude}, देशान्तर: ${location.coords.longitude}
          : 'लोकेसन लोड हुँदैछ...'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});