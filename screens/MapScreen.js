import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MarkerData } from '../assets/Data';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 48.860363;
const LONGITUDE = 2.313201;
const LATITUDE_DELTA = 0.0052;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export class MapScreen extends Component {
  // react-navigation specific options
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
        <View style={styles.calloutCard}>
          <Text style={styles.cardTitleText}>
            {MarkerData[this.state.calloutMarkerID].markerTitle}
          </Text>
          <Text style={styles.cardDescriptionText}>
            {MarkerData[this.state.calloutMarkerID].markerDescription}
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
          <View>
            <Text style={styles.calloutTitleText}>
              {marker.markerTitle}
            </Text>
          </View>
        </MapView.Callout>
      </MapView.Marker>
    );

    return (
      <View style={{ paddingTop: this.state.bugfix, flex: 1 }}>
        <View style={styles.screenTab}>
          <Text style={styles.screenHeading}>Map</Text>
        </View>
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

const styles = StyleSheet.create({
  screenTab: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 0,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#EEEEEE',
  },

  screenHeading: {
    color: '#343434',
    fontFamily: 'Roboto',
    fontSize: 18,
  },

  calloutCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 60,
    left: 0,
    width: width - 48,
    position: 'absolute',
    bottom: 24,
    borderRadius: 4,
    elevation: 1,
  },

  cardTitleText: {
    fontSize: 16,
    marginTop: 4,
    marginBottom: 8,
  },

  cardDescriptionText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

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
