import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class EventDetails extends Component {
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
  // Compensate for the status bar by adding a borderTop
  screen: {
    backgroundColor: '#EEF1F5',
    flex: 1,
    borderTopWidth: 24,
    borderTopColor: '#202D3D',
  },

  screenTab: {
    alignItems: 'center',
    backgroundColor: '#202D3D',
    elevation: 4,
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
});
