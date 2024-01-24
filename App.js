import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [sightingDescription, setSightingDescription] = useState('');
  const [markerCoordinate, setMarkerCoordinate] = useState(null);

  const handleReportSighting = () => {
    console.log('Sighting reported:', sightingDescription);
    //sighting report logic
  };

  const handleMapPress = (event) => {
    // Set the marker coordinate when the map is pressed
    setMarkerCoordinate(event.nativeEvent.coordinate);
  };

  return (
    <View style={styles.container}>
      <Text>Report a Coyote sighting</Text>
      <MapView
        style={styles.map}
        onPress={handleMapPress}
      >
        {markerCoordinate && <Marker coordinate={markerCoordinate} />}
      </MapView>
      <TextInput
        style={styles.input}
        placeholder="Enter sighting details"
        onChangeText={(text) => setSightingDescription(text)}
        value={sightingDescription}
        multiline
      />
      <Button title="Report Sighting" onPress={handleReportSighting} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  map: {
    width: '100%',
    height: 200,
    marginVertical: 10,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 8,
    textAlignVertical: 'top',
  },
});
