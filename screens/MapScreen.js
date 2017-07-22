import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
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
      bugfix: 1,
      showCalloutMarkerCard: false,
      calloutMarkerID: 0,
    };
  }

  // This is a fix to tackle a bug in react-native-maps (ref. Issue 1033)
  componentWillMount() {
    setTimeout(() => this.setState({ bugfix: 0 }), 600);
  }

  markerPressed = markerID => {
    this.setState({
      calloutMarkerID: markerID,
      showCalloutMarkerCard: true,
    });
    console.log(this.state);
  };

  showCalloutCard = () => {
    if (this.state.showCalloutMarkerCard)
      return (
        <View
          style={{
            backgroundColor: '#FFFFFF',
            height: 120,
            marginLeft: 24,
            marginRight: 24,
            marginBottom: 60,
            left: 0,
            width: width - 48,
            position: 'absolute',
            bottom: 24,
            borderRadius: 2,
            elevation: 1,
          }}
        >
          <Text>
            {MarkerData[this.state.calloutMarkerID].markerTitle}
          </Text>
        </View>
      );
  };

  render() {
    const { region } = this.state;

    const MarkerList = MarkerData.map(marker =>
      <MapView.Marker
        key={marker.markerID}
        onPress={() => this.markerPressed(marker.markerID)}
        coordinate={{
          latitude: marker.markerLatitude,
          longitude: marker.markerLongitude,
        }}
      >
        <MapView.Callout>
          <Text>
            {marker.markerTitle}
          </Text>
        </MapView.Callout>
      </MapView.Marker>
    );

    return (
      <View style={{ paddingTop: this.state.bugfix, flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={region}
          pitchEnabled={false}
          moveOnMarkerPress
          showsUserLocation
          showCompass
          customMapStyle={customStyle}
          onPress={() => {
            this.setState({ showCalloutMarkerCard: false });
          }}
        >
          {MarkerList}
        </MapView>
        {this.showCalloutCard()}
      </View>
    );
  }
}

const customStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
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
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
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
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
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
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
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
  {
    featureType: 'road.local',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
];
