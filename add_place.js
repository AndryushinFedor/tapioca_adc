import React, { useState } from 'react'
import {
  AlertIOS,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native'


const AddPlace = () => {
  const st = {
      title: '',
      latitude: '',
      longitude: '',
      titleError: '',
      latitudeError: '',
      longitudeError: ''
  }

  const [state, setState] = useState(st) 

  function handleAddPlace() {
    const { title, latitude, longitude } = state;
 
    let titleError = '';
    let latitudeError = '';
    let longitudeError = '';

    if (!title) {
      titleError = 'Name is required.';
    }
    if (!latitude) {
      latitudeError = 'Latitude is required.';
    }
    if (!longitude) {
      longitudeError = 'Longitude is required.';
    }

    setState({
      titleError,
      latitudeError,
      longitudeError
    })

    const isError = titleError || latitudeError || longitudeError

    if (!isError) {
      props.onAddPlace({
        title,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude)
      })

      AlertIOS.alert(
        'Place added',
        'Your place is added to the map. Click on the Favorites tab to view.'
      )
    }
  }

  function handleTitle(title) {
    lat = state.latitude
    lon = state.longitude
    setState({ title, lat, lon })
  }

  function handleLatitude(latitude) {
    tit = state.title
    lon = state.longitude
    setState({ tit, latitude, lon })
  }

  function handleLongitude(longitude) {
    tit = state.title
    lat = state.latitude
    setState({ tit, lat, longitude })
  }

  return (
      <View style={styles.view}>
        <Text style={styles.text}>Title</Text>
        <TextInput
          style={styles.textInput}
          value={state.title}
          onChangeText={(title) => handleTitle({ title })}
        ></TextInput>
        <Error message={state.titleError} />
        <Text style={styles.text}>Latitude</Text>
        <TextInput
          keyboardType="numbers-and-punctuation"
          style={styles.textInput}
          value={state.latitude}
          onChangeText={(latitude) => handleLatitude({ latitude })}
        ></TextInput>
        <Error message={state.latitudeError} />
        <Text style={styles.text}>Longitude</Text>
        <TextInput
          keyboardType="numbers-and-punctuation"
          style={styles.textInput}
          value={state.longitude}
          onChangeText={(longitude) => handleLongitude({ longitude })}
        ></TextInput>
        <Error message={state.longitudeError} />
        <TouchableHighlight style={styles.button} onPress={handleAddPlace}>
          <Text style={styles.buttonText}>Add Place</Text>
        </TouchableHighlight>
      </View>
  )
}

export default AddPlace

const Error = (props) => {
  return (
    <Text style={styles.error}>{props.message}</Text>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#fed',
    flex: 1
  },
  text: {
    color: '#333333',
    marginBottom: 5
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5
  },
  error: {
    color: '#c66',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#ff7f50',
    padding: 12,
    borderRadius: 6
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})