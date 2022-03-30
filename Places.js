import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View
} from 'react-native';
import PlaceMap from './place_map'
import AddPlace from './add_place';

const Places = () => {
  state = {
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
          title: 'Arlington!',
          latitude: 38.8783,
          longitude: -77.0687
        }
      ]
  }  

  function handleAddPlace(annotation) {
    const annotations = state.annotations.slice();
    annotations.push(annotation);
    setState({ annotations });
  }
      /* <View style={styles.view}>
      <Text style={styles.text}>Favorite Places</Text>
    </View> */

  return (
    <PlaceMap annotations={state.annotations} />
  )
}
//<AddPlace onAddPlace={handleAddPlace} />


export default Places
/*

        <TabBarIOS.Item
          title="Place"
          icon={require('./pin.png')}
          selected={state.selectedTab === 1}
          onPress={handleTabPress}
        >
          <AddPlace onAddPlace={handleAddPlace} />
        </TabBarIOS.Item>


*/


const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 50,
  },
  view: {
    backgroundColor: '#fed',
    flex: 1
  }
})
