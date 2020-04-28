import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
  View,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker, Circle, Polyline, Callout} from 'react-native-maps';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import store from './src/store/store';
import {createMarker, getMarkers} from './src/actions/markerActions';
import Map from './src/components/screens/mapScreen';

export default class App extends React.Component {
  styles = StyleSheet.create({
    flex: {
      flex: 1,
    },
  });

  render() {
    return (
      <Provider store={store}>
        <Map />
      </Provider>
    );
  }
}
