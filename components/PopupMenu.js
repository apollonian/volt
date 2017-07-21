import React, { Component } from 'react';
import {
  View,
  UIManager,
  findNodeHandle,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class PopupMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: null,
    };
  }

  onError() {
    console.log('Popup Error');
  }

  onPress = () => {
    if (this.state.icon) {
      UIManager.showPopupMenu(
        findNodeHandle(this.state.icon),
        this.props.actions,
        this.onError,
        this.props.onPress
      );
    }
  };

  onRef = icon => {
    if (!this.state.icon) {
      this.setState({ icon });
    }
  };

  render() {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.08)', true)}
        onPress={this.onPress}
      >
        <View
          style={{
            height: 56,
            width: 56,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Icon
            name={this.props.icon}
            size={this.props.size}
            color={this.props.color}
            ref={this.onRef}
          />
        </View>
      </TouchableNativeFeedback>
    );
  }
}
