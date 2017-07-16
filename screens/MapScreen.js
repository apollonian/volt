import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class MapScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: () => <Icon size={24} name="map" color="#727272" />,
  };

  render() {
    return (
      <View style={styles.MapViewPort}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MapViewPort: {
    height: 200,
    width: 200,
  },
});
