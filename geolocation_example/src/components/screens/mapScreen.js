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
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {PermissionsAndroid} from 'react-native';

import {createMarker, getMarkers} from '../../actions/markerActions';
import store from '../../store/store';

export class Map extends React.Component {
  styles = StyleSheet.create({
    flex: {
      flex: 1,
    },
    image: {
      width: 100,
      height: 100,
    },
  });

  state = {
    currentPosition: null,
    coordinates: [],
  };

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation App',
          message: 'Geolocation App access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  componentDidMount() {
    this.requestLocationPermission();
    this.props.getMarkers();
    Geolocation.watchPosition(
      ({coords}) => {
        this.setState(state => ({
          currentPosition: {
            ...coords,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          coordinates: [
            ...state.coordinates,
            {latitude: coords.latitude, longitude: coords.longitude},
          ],
        }));
      },
      console.log,
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
      },
    );
  }

  onMapPress = e => {
    const {coordinate} = e.nativeEvent;
    this.props.createMarker({
      coordinate: coordinate,
      title: 'Marker from redux',
      description: 'This is a marker put in and loaded from the redux store',
    });
  };

  render() {
    if (!this.state.currentPosition) {
      return null;
    }
    return (
      <MapView
        style={this.styles.flex}
        initialRegion={this.state.currentPosition}
        onPress={this.onMapPress}>
        <Polyline
          coordinates={this.state.coordinates}
          strokeWidth={5}
          strokeColor="red"
        />
        <Marker
          onPress={e => e.stopPropagation()}
          coordinate={this.state.currentPosition}
          title="Our Current Location"
          description="This is your current location. It will update as your device location changes.">
          <Callout>
            <Image
              style={this.styles.image}
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Pok%C3%A9mon_Pikachu_art.png/220px-Pok%C3%A9mon_Pikachu_art.png',
              }}
            />
            <Button title="Edit" onPress={() => console.log('Hello, world!')} />
          </Callout>
        </Marker>
        {this.props.markers.map(marker => (
          <Marker
            draggable
            onDragEnd={() => console.log('I drag ended')}
            onPress={e => e.stopPropagation()}
            key={`${marker.coordinate.longitude}_${marker.coordinate.latitude}`}
            {...marker}
          />
        ))}
      </MapView>
    );
  }
}

const mapStateToProps = storeState => {
  return {
    markers: storeState.markers,
  };
};

const mapPropsToDispatch = {
  getMarkers,
  createMarker,
};


export default connect(
  mapStateToProps,
  mapPropsToDispatch,
)(Map);
