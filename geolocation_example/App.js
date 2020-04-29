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
import {createStackNavigator} from '@react-navigation/stack';

import store from './src/store/store';
import {createMarker, getMarkers} from './src/actions/markerActions';
import Map from './src/components/screens/mapScreen';
import AdvList from './src/components/screens/AdvList';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default class App extends React.Component {
  styles = StyleSheet.create({
    flex: {
      flex: 1,
    },
  });

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="advlist" component={AdvList} />
            <Stack.Screen name="map" component={Map} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
