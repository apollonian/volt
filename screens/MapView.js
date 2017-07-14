import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export class MapView extends Component {
  static navigationOptions = {
    tabBarLabel: "Map",
    tabBarIcon: () => <Icon size={24} name="map" color="#727272" />
  }

  render() {
    return <View><Text>Books</Text></View>
  }
}