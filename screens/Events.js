import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { EventData } from '../assets/EventData';

export class Events extends Component {
  static navigationOptions = {
    tabBarLabel: 'Events',
    tabBarIcon: () => <Icon size={24} name="event" color="#727272" />,
  };

  render() {
    const EventList = EventData.map(event =>
      <View style={styles.card} key={event.eventID}>
        <View style={styles.imgblock} />
        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate('EventDetails', event)}
          background={TouchableNativeFeedback.Ripple(
            'rgba(0, 0, 0, 0.06)',
            false
          )}
        >
          <View style={styles.block}>
            <View style={styles.blockInfo}>
              <View style={styles.blockInfoTime}>
                <Text style={styles.blockInfoTimeChunk}>
                  {event.eventTime}
                </Text>
              </View>
              <View style={styles.blockInfoEvent}>
                <Text style={styles.herotitle}>
                  {event.eventTitle}
                </Text>
                <Text style={styles.subtitle}>
                  <Text style={styles.blockInfoTimeDuration}>
                    {event.eventDuration}min
                  </Text>
                  &nbsp;&bull;&nbsp;{event.eventVenue}
                </Text>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );

    return (
      <View style={styles.screen}>
        <View style={styles.screenTab}>
          <Text style={styles.screenHeading}>Events</Text>
          {/* <TouchableNativeFeedback
            onPress={() => console.log('Home')}
            background={TouchableNativeFeedback.Ripple(
              'rgba(0, 0, 0, 0.24)',
              true
            )}
          >
            <View style={styles.filterIconBound}>
              <Icon
                size={20}
                name="filter-variant"
                color="#FFFFFF"
                style={styles.filtericon}
              />
            </View>
          </TouchableNativeFeedback> */}
        </View>
        <View style={styles.scrollArea}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {EventList}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Compensate for the status bar by adding a borderTop
  screen: {
    backgroundColor: '#EEF1F5',
    flex: 1,
    borderTopWidth: 24,
    borderTopColor: '#202D3D',
  },

  screenTab: {
    alignItems: 'center',
    backgroundColor: '#202D3D',
    elevation: 4,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
  },

  // filterIconBound: {
  //   position: 'absolute',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   right: 24,
  //   height: 56,
  //   width: 24,
  // },

  screenHeading: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 18,
  },

  scrollArea: {
    paddingBottom: 56,
  },

  card: {
    paddingTop: 12,
    paddingBottom: 12,
  },

  imgblock: {
    backgroundColor: '#2D3645',
    borderRadius: 2,
    elevation: 6,
    height: 140,
    padding: 0,
    marginLeft: 28,
    marginRight: 28,
  },

  block: {
    backgroundColor: '#fff',
    borderRadius: 2,
    elevation: 0,
    marginTop: -130,
    marginRight: 20,
    marginLeft: 36,
    paddingTop: 130,
  },

  blockInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  blockInfoTime: {
    flexDirection: 'row',
    marginTop: 28,
    marginLeft: 32,
    marginRight: 0,
  },

  blockInfoTimeChunk: {
    color: '#343434',
  },

  blockInfoTimeDuration: {
    color: '#BDBDBD',
    fontSize: 13,
  },

  blockInfoEvent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingRight: 8,
    marginTop: 24,
    marginBottom: 24,
    marginLeft: 8,
    width: 0,
  },

  herotitle: {
    color: '#000',
    flexWrap: 'wrap',
    fontFamily: 'Roboto',
    fontSize: 18,
    opacity: 0.7,
  },

  subtitle: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 13,
    opacity: 0.5,
  },
});
