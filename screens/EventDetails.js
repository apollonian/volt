import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Share,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class EventDetails extends Component {
  static navigationOptions = {
    gesturesEnabled: true,
  };

  render() {
    const {
      eventTime,
      eventTitle,
      eventImage,
      eventDuration,
      eventVenueMain,
      eventDescription,
      eventVenueSecondary,
    } = this.props.navigation.state.params;

    return (
      <View style={styles.screen}>
        <ScrollView
          style={styles.scrollStyle}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.photoBox}>
            <Image source={eventImage} style={styles.photoBoxImage} />
            <View style={styles.eventNameHeroView}>
              <Icon name="star-border" size={24} color="#FFF" />
              <Text style={styles.eventNameHero}>
                {eventTitle}
              </Text>
            </View>
          </View>
          <View style={styles.infoCard}>
            <View style={styles.infoCardChunk}>
              <Icon name="schedule" size={24} color="#BDBDBD" />
              <View style={{ flexDirection: 'column' }}>
                <View>
                  <Text style={styles.infoCardChunkMainText}>
                    {eventTime}
                  </Text>
                </View>
                <View>
                  <Text style={styles.infoCardChunkSecondaryText}>
                    {eventDuration} minutes
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.infoCardChunk}>
              <Icon name="place" size={24} color="#BDBDBD" />
              <View style={{ flexDirection: 'column' }}>
                <View>
                  <Text style={styles.infoCardChunkMainText}>
                    {eventVenueMain}
                  </Text>
                </View>
                <View>
                  <Text style={styles.infoCardChunkSecondaryText}>
                    {eventVenueSecondary}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.infoCardChunk}>
              <Icon name="info-outline" size={24} color="#BDBDBD" />
              <Text style={styles.infoCardChunkMainText}>
                {eventDescription}
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.screenTab}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.goBack()}
            background={TouchableNativeFeedback.Ripple(
              'rgba(200, 200, 200, 0.12)',
              true
            )}
          >
            <View style={[styles.iconBase, styles.leftIconBound]}>
              <Icon size={24} name="arrow-back" color="#FFFFFF" />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(
              'rgba(200, 200, 200, 0.12)',
              true
            )}
          >
            <View style={[styles.iconBase, styles.secondrightIconBound]}>
              <Icon size={24} name="map" color="#FFFFFF" />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            onPress={() =>
              Share.share({ message: '', title: '' }, { dialogTitle: '' })}
            background={TouchableNativeFeedback.Ripple(
              'rgba(200, 200, 200, 0.12)',
              true
            )}
          >
            <View style={[styles.iconBase, styles.rightIconBound]}>
              <Icon size={24} name="share" color="#FFFFFF" />
            </View>
          </TouchableNativeFeedback>
          <Text style={styles.screenHeading} />
        </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
  },

  iconBase: {
    alignItems: 'center',
    height: 56,
    justifyContent: 'center',
    position: 'absolute',
    width: 56,
  },

  leftIconBound: {
    left: 0,
  },

  rightIconBound: {
    right: 0,
  },

  secondrightIconBound: {
    right: 52,
  },

  photoBox: {
    backgroundColor: '#1D2D3D',
    height: 320,
    minHeight: 280,
    justifyContent: 'flex-end',
  },

  photoBoxImage: {
    position: 'absolute',
    height: 320,
    width: '100%',
    resizeMode: 'cover',
  },

  eventNameHeroView: {
    alignItems: 'center',
    paddingBottom: 24,
    paddingTop: 24,
    flexDirection: 'row',
    paddingLeft: 28,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },

  eventNameHero: {
    color: '#FFFFFF',
    fontSize: 24,
    left: 16,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    paddingTop: 12,
  },

  infoCardChunk: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 28,
    borderTopColor: '#F7F7F7',
    borderTopWidth: 0,
  },

  infoCardChunkMainText: {
    color: '#343434',
    fontSize: 16,
    paddingRight: 32,
    paddingLeft: 16,
  },

  infoCardChunkSecondaryText: {
    color: '#727272',
    fontSize: 13,
    paddingRight: 32,
    paddingLeft: 16,
  },
});
