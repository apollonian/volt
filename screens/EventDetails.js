import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
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
        <ScrollView style={styles.scrollStyle}>
          <View style={styles.photoBox}>
            <View style={styles.screenTab}>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.goBack()}
                background={TouchableNativeFeedback.Ripple(
                  'rgba(0, 0, 0, 0.24)',
                  true
                )}
              >
                <View style={styles.backIconBound}>
                  <Icon
                    size={24}
                    name="arrow-back"
                    color="#FFFFFF"
                    style={styles.backicon}
                  />
                </View>
              </TouchableNativeFeedback>
              <Text style={styles.screenHeading} />
            </View>
          </View>
          <View style={styles.infoCard}>
            <View style={styles.infoCardChunk}>
              <Icon name="schedule" size={30} color="#BDBDBD" />
              <View style={{ flexDirection: 'column' }}>
                <View>
                  <Text style={styles.infoCardChunkMainText}>
                    {eventTime}
                  </Text>
                </View>
                <View>
                  <Text style={styles.infoCardChunkSecondaryText}>
                    {eventDuration}minutes
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.infoCardChunk}>
              <Icon name="place" size={30} color="#BDBDBD" />
              <View style={{ flexDirection: 'column' }}>
                <View>
                  <Text style={styles.infoCardChunkMainText}>
                    {eventVenue}
                  </Text>
                </View>
                <View>
                  <Text style={styles.infoCardChunkSecondaryText}>Stage</Text>
                </View>
              </View>
            </View>
            <View style={styles.infoCardChunk}>
              <Icon name="info-outline" size={30} color="#BDBDBD" />
              <Text style={styles.infoCardChunkMainText}>
                {eventDescription}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    // Compensate for the status bar by adding a borderTop
    // borderTopWidth: 24,
    // borderTopColor: '#202D3D',
  },

  screenTab: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    elevation: 0,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
  },

  backIconBound: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    height: 56,
    width: 56,
  },

  photoBox: {
    backgroundColor: '#1D2D3D',
    height: 320,
    minHeight: 280,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    paddingTop: 12,
    paddingBottom: 16,
  },

  infoCardChunk: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 32,
    borderBottomColor: '#EAEAEA',
    borderBottomWidth: 0.5,
  },

  infoCardChunkMainText: {
    color: '#343434',
    fontSize: 16,
    paddingRight: 32,
    paddingLeft: 20,
  },

  infoCardChunkSecondaryText: {
    color: '#727272',
    fontSize: 13,
    paddingRight: 32,
    paddingLeft: 20,
  },
});
