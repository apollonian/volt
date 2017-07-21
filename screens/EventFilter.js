import React, { Component } from 'react';
import { Button } from 'react-native';

export class EventFilter extends Component {
  static navigationOptions = {
    drawerLabel: 'EventFilter',
  };

  render() {
    return <Button title="Go back home" />;
  }
}
