import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => <Icon size={24} name="home" color="#727272" />,
  };

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}
