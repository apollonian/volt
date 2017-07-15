import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { EventCard } from './components/EventCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class Events extends Component {
  static navigationOptions = {
    tabBarLabel: 'Events',
    tabBarIcon: () => <Icon size={24} name="event" color="#727272" />,
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.screenTab}>
          <Text style={styles.screenHeading}>EVENTS</Text>
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
            <EventCard
              val={1}
              eventTime={'16:00'}
              eventTitle={'Checkered Flag'}
              eventVenue={'Race Track'}
              eventDuration={120}
              eventTags={['race']}
            />
            <EventCard
              val={2}
              eventTime={'18:00'}
              eventTitle={'Autograph Session'}
              eventVenue={'Fan Park'}
              eventDuration={60}
              eventTags={['fans']}
            />
            <EventCard
              val={3}
              eventTime={'22:00'}
              eventTitle={'Presentation'}
              eventVenue={'Podium'}
              eventDuration={30}
              eventTags={['race']}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Compensate for the status bar by adding a marginTop
  screen: {
    backgroundColor: '#EEF1F5',
    flex: 1,
    marginTop: 24,
  },

  screenTab: {
    alignItems: 'center',
    backgroundColor: '#202D3D',
    elevation: 2,
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
});
