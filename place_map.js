import React, { Component } from 'react';
import {
  AlertIOS,
  Text,
  MapView,
  View,
  TouchableHighlight,
  StyleSheet,
  Linking
} from 'react-native';

const PlaceMap = (props) => {
  region = {
      latitude: 38.8977,
      longitude: -77.0365,
      latitudeDelta: 0.2,
      longitudeDelta: 0.2,
      title: "White House"
  }

  function handleNavigation(la, lo) {
    const rla = region.latitude;
    const rlo = region.longitude;
    const url = `http://maps.apple.com/?saddr=${rla},${rlo}&daddr=${la},${lo}&dirflg=d`;
    return Linking.openURL(url);
  }

  const annotations = props.annotations

  annotations.forEach(annotation => {
      annotation.rightCalloutView = (
        <TouchableHighlight
          style={styles.button}
          onPress={handleNavigation(annotation.latitude, annotation.longitude)}
        >
          <Text style={styles.buttonText}>Navigation</Text>
        </TouchableHighlight>
      );
  })

  return (
      <MapView
        style={styles.map}
        region={region}
        annotations={annotations}
      />
  )
}

export default PlaceMap

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  button: {
    backgroundColor: 'red',
    padding: 5,
    margin: 5
  },
  buttonText: {
    fontSize: 12,
    color: 'white'
  }
})
