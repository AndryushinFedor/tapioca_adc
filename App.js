import { View } from "react-native";
import MapView from "react-native-maps";
import { StyleSheet } from 'react-native';
import Places from './Places.js'


export default function App() {
  const state = {
    selectedTab: 0,
    annotations: [
      {
        title: 'Smithsonian Museum',
        latitude: 38.8980,
        longitude: -77.0230
      },
      {
        title: 'UMCP',
        latitude: 38.9869,
        longitude: -76.9426
      },
      {
        title: 'Arlington',
        latitude: 38.8783,
        longitude: -77.0687
      }
    ]
  }

  // <View
  //     style={{
  //       flex: 1,
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  // <View />

  return (
      <Places />
  )
}

/*
<MapView
        style={{
          width: "100%",
          height: "100%",
        }}
        region={{
          latitude: 38.8977,
          longitude: -77.0365,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
          title: "White House"
        }}
        annotations={[
          {
            title: 'Smithsonian Museum',
            latitude: 38.8980,
            longitude: -77.0230
          },
          {
            title: 'UMCP',
            latitude: 38.9869,
            longitude: -76.9426
          },
          {
            title: 'Arlington',
            latitude: 38.8783,
            longitude: -77.0687
          }
        ]}

      />
    </View>
*/


//<PlaceMap annotations={state.annotations} /> 

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})


