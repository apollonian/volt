import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MarkerData } from '../assets/MarkerData';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 48.860363;
const LONGITUDE = 2.313201;
const LATITUDE_DELTA = 0.0052;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export class MapScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Map',
    tabBarIcon: () => <Icon size={24} name="map" color="#727272" />,
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      dummy: 1,
    };
  }

  // This is a fix to tackle a bug in react-native-maps (ref. Issuse 1033)
  componentWillMount() {
    setTimeout(() => this.setState({ bugfix: 0 }), 500);
  }

  render() {
    const { region } = this.state;

    return (
      <View style={{ paddingTop: this.state.bugfix, flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={region}
          pitchEnabled={false}
          showsUserLocation
          showCompass
          customMapStyle={customStyle}
        />
      </View>
    );
  }
}

const customStyle = [
  {
    elementType: 'labels',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    stylers: [
      {
        color: '#ffeb3b',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    stylers: [
      {
        lightness: 20,
      },
      {
        visibility: 'simplified',
      },
      {
        weight: 6.5,
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.business',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.local',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];
