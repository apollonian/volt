import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export class Info extends Component {
  static navigationOptions = {
    tabBarLabel: "Info",
    tabBarIcon: () => <Icon size={24} name="info" color="#727272"/>
  }

  render() {
    return <View>
      <Text>Books</Text>
    </View>
  }
}