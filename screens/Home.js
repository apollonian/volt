import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScheduleData } from '../assets/Data';

export class Home extends Component {
  // react-navigation specific options
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => <Icon size={24} name="home" color="#727272" />,
  };

  render() {
    let ScheduleList = ScheduleData.map(schedule =>
      <View style={styles.card} key={schedule.scheduleID}>
        <Text style={styles.herotitle}>
          {schedule.scheduleTitle}
        </Text>
        <Text style={styles.subtitle}>
          <Text style={styles.blockInfoTimeDuration}>
            {schedule.scheduleStart} - {schedule.scheduleEnd}
          </Text>
        </Text>
      </View>
    );

    return (
      <View style={styles.screen}>
        <View style={styles.screenTab}>
          <Text style={styles.screenHeading}>Home</Text>
        </View>
        <ScrollView>
          <View style={styles.hero}>
            <Text style={styles.RaceTitleText}>
              Julius Baer Mexico City ePrix
            </Text>
            <Text style={styles.RaceVenueText}>
              Autòdromo Hermanos Rodrìuez
            </Text>
            <Text style={styles.RaceDateText}>1 April, 2017</Text>
          </View>
          <View>
            <Image
              source={require('../assets/images/hero-1.jpg')}
              style={styles.photoBoxImage}
            />
          </View>
          <Text style={styles.sectionHeading}>SCHEDULE</Text>
          {ScheduleList}
          <Text style={styles.sectionHeading}>MY FAVORITES</Text>
          <View style={[styles.card, { alignItems: 'center' }]}>
            <Text>Your starred activities will appear here</Text>
            <Text>Go and Explore!</Text>
          </View>
          <Text style={styles.sectionHeading}>ABOUT MEXICO ePRIX</Text>
          <View style={[styles.card, { marginBottom: 24 }]}>
            <Text>
              Formula E will charge its way through one of the most vibrant
              cities to race at the 2017 FIA Formula E Julius Baer Mexico City
              ePrix.
            </Text>
            <Text>
              The passion for racing hangs in the air at Mexico's most famous
              race track. Situated inside the city limits, the Autódromo
              Hermanos Rodríguez is named after the country's most celebrated
              drivers making victory here even more special.
            </Text>
            <Text>
              Off track, the eVillage fan zone showcases all day entertainment,
              live music, interactive displays and a dedicated kids area. What’s
              more, we get our fans even closer to the action with special
              appearances from our drivers, including a podium ceremony that is
              open to all!
            </Text>
          </View>
        </ScrollView>
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

  screenHeading: {
    color: '#343434',
    fontFamily: 'Roboto',
    fontSize: 18,
  },

  sectionHeading: {
    fontSize: 14,
    left: 16,
    paddingTop: 16,
    paddingBottom: 10,
  },

  hero: {
    alignItems: 'center',
    width: '100%',
  },

  RaceTitleText: {
    fontSize: 24,
  },

  RaceDateText: {
    fontSize: 14,
  },

  RaceVenueText: {
    fontSize: 14,
  },

  photoBoxImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 180,
  },

  card: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F7F7F7',
  },

  herotitle: {
    fontSize: 16,
  },

  subtitle: {
    fontSize: 14,
  },
});
