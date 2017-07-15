import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView, TouchableNativeFeedback} from 'react-native'
import {EventCard} from './components/EventCard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export class Home extends Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: () => <Icon size={24} name="home" color="#727272"/>
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.screenTab}>
          <Text style={styles.screenHeading}>EVENTS</Text>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <EventCard
              val={1}
              eventTime={'16:00'}
              eventTitle={'Checkered Flag'}
              eventVenue={'Race Track'}
              eventDuration={120}/>
            <EventCard
              val={2}
              eventTime={'18:00'}
              eventTitle={'Autograph Session'}
              eventVenue={'Fan Park'}
              eventDuration={60}/>
            <EventCard
              val={3}
              eventTime={'22:00'}
              eventTitle={'Presentation'}
              eventVenue={'Podium'}
              eventDuration={30}/>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // Compensate for the status bar by adding a marginTop
  screen: {
    backgroundColor: '#EEF1F5',
    flex: 1,
    marginTop: 24
  },

  screenTab: {
    alignItems: 'center',
    backgroundColor: '#202D3D',
    elevation: 2,
    height: 56,
    justifyContent: 'center'
  },

  screenHeading: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 20
  },

  scrollArea: {
    paddingBottom: 56
  }
})