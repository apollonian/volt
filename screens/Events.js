import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export class Events extends Component {
  static navigationOptions = {
    tabBarLabel: "Events",
    tabBarIcon: () => <Icon size={24} name="event" color="white" />
  }

  render() {
    return <View><Text>Movies & TV</Text></View>
  }
}