import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

export class EventCard extends Component {
  _onPressButton = val => {
    console.log('Pressed' + val);
  };

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.imgblock} />
        <TouchableNativeFeedback
          onPress={() => this._onPressButton(this.props.val)}
          background={TouchableNativeFeedback.Ripple(
            'rgba(0, 0, 0, 0.06)',
            false
          )}
        >
          <View style={styles.block}>
            <View style={styles.blockInfo}>
              <View style={styles.blockInfoTime}>
                <Text style={styles.blockInfoTimeChunk}>
                  {this.props.eventTime}
                </Text>
              </View>
              <View style={styles.blockInfoEvent}>
                <Text style={styles.herotitle}>
                  {this.props.eventTitle}
                </Text>
                <Text style={styles.subtitle}>
                  <Text style={styles.blockInfoTimeDuration}>
                    {this.props.eventDuration}min
                  </Text>
                  &nbsp;&bull;&nbsp;{this.props.eventVenue}
                </Text>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    paddingTop: 12,
    paddingBottom: 12,
  },

  imgblock: {
    backgroundColor: '#2D3645',
    borderRadius: 2,
    elevation: 6,
    height: 140,
    padding: 0,
    marginLeft: 28,
    marginRight: 28,
  },

  block: {
    backgroundColor: '#fff',
    borderRadius: 2,
    elevation: 0,
    marginTop: -130,
    marginRight: 20,
    marginLeft: 36,
    paddingTop: 130,
  },

  blockInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  blockInfoTime: {
    flexDirection: 'row',
    marginTop: 28,
    marginLeft: 32,
    marginRight: 0,
  },

  blockInfoTimeChunk: {
    color: '#343434',
  },

  blockInfoTimeDuration: {
    color: '#BDBDBD',
    fontSize: 13,
  },

  blockInfoEvent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingRight: 8,
    marginTop: 24,
    marginBottom: 24,
    marginLeft: 8,
    width: 0,
  },

  image: {
    // height: 72,
    // margin: 16,
    resizeMode: 'contain',
  },

  herotitle: {
    color: '#000',
    flexWrap: 'wrap',
    fontFamily: 'Roboto',
    fontSize: 18,
    opacity: 0.7,
  },

  subtitle: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 13,
    opacity: 0.5,
  },
});
