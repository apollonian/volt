import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
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
                  &nbsp;&bull;&nbsp;{event.eventVenueMain}
                </Text>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );

    return (
      <View style={styles.screen}>
        <StatusBar hidden />
        <View style={styles.screenTab}>
          <TouchableNativeFeedback
            onPress={() => console.log('Home')}
            background={TouchableNativeFeedback.Ripple(
              'rgba(0, 0, 0, 0.24)',
              true
            )}
          >
            <View style={[styles.iconBase, styles.leftIconBound]}>
              <Icon size={20} name="view-list" color="#727272" />
            </View>
          </TouchableNativeFeedback>
          <Text style={styles.screenHeading}>Events</Text>
          <TouchableNativeFeedback
            onPress={() => console.log('Home')}
            background={TouchableNativeFeedback.Ripple(
              'rgba(0, 0, 0, 0.24)',
              true
            )}
          >
            <View style={[styles.iconBase, styles.rightIconBound]}>
              <Icon size={20} name="filter-list" color="#727272" />
            </View>
          </TouchableNativeFeedback>
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
  screen: {
    backgroundColor: '#EEF1F5',
    flex: 1,
    // Compensate for the status bar by adding a borderTop
    // borderTopWidth: 24,
    // borderTopColor: '#FFFFFF',
  },

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

  iconBase: {
    alignItems: 'center',
    height: 56,
    justifyContent: 'center',
    position: 'absolute',
    width: 56,
  },

  rightIconBound: {
    right: 0,
  },

  leftIconBound: {
    left: 0,
  },

  screenHeading: {
    color: '#343434',
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
