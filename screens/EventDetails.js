import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class EventDetails extends Component {
  static navigationOptions = {
    gesturesEnabled: true,
  };

  render() {
    const {
      eventDescription,
      eventDuration,
      eventTime,
      eventTitle,
      eventVenue,
    } = this.props.navigation.state.params;

    return (
      <View style={styles.screen}>
        <View style={styles.screenTab}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.goBack()}
            background={TouchableNativeFeedback.Ripple(
              'rgba(0, 0, 0, 0.24)',
              true
            )}
          >
            <View style={styles.filterIconBound}>
              <Icon
                size={24}
                name="arrow-back"
                color="#727272"
                style={styles.filtericon}
              />
            </View>
          </TouchableNativeFeedback>
          <Text style={styles.screenHeading}>
            {eventTitle}
          </Text>
        </View>
        <View>
          <View>
            <Text>
              {eventTime}
            </Text>
            <Text>
              {eventDuration}
            </Text>
          </View>
          <View>
            <Text>
              {eventTitle}
            </Text>
          </View>
          <View>
            <Text>
              {eventDescription}
            </Text>
          </View>
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
    // borderTopColor: '#202D3D',
  },

  screenTab: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 0,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
  },

  filterIconBound: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    height: 56,
    width: 56,
  },

  screenHeading: {
    color: 'gray',
    fontFamily: 'Roboto',
    fontSize: 18,
  },
});
