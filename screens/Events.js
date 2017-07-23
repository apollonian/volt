import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PopupMenu from '../components/PopupMenu';
import { EventData } from '../assets/Data';
let filterTags = [];

export class Events extends Component {
  // react-navigation specific options
  static navigationOptions = {
    tabBarLabel: 'Events',
    tabBarIcon: () => <Icon size={24} name="event" color="#727272" />,
  };

  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
    };
  }

  fillFilterTags = () => {
    filterTags = [];
    filterTags.push('All');
    EventData.forEach(item => {
      filterTags.push(item.eventTag);
    });
    filterTags = [...new Set(filterTags)].sort();
    return filterTags;
  };

  onPopupEvent = (e, index = 0) => {
    this.setState({
      filter: filterTags[index],
    });
  };

  render() {
    let EventList = EventData.filter(
      event =>
        'All' === this.state.filter
          ? true
          : event.eventTag === this.state.filter ? true : false
    ).map(event =>
      <View style={styles.card} key={event.eventID}>
        <View style={styles.imageContainer}>
          <Image
            source={event.eventImage}
            style={{ flex: 1, width: null, height: null, borderRadius: 2 }}
          />
        </View>
        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate('EventDetails', event)}
          background={TouchableNativeFeedback.Ripple(
            'rgba(0, 0, 0, 0.08)',
            false
          )}
        >
          <View style={styles.block}>
            <View style={styles.blockInfo}>
              <View style={styles.blockInfoTime}>
                <Text style={styles.blockInfoTimeChunk}>
                  {event.eventTime}
                </Text>
              </View>
              <View style={styles.blockInfoEvent}>
                <Text style={styles.herotitle}>
                  {event.eventTitle}
                </Text>
                <Text style={styles.subtitle}>
                  <Text style={styles.blockInfoTimeDuration}>
                    {event.eventDuration}min
                  </Text>
                  &nbsp;&bull;&nbsp;{event.eventVenueMain}
                </Text>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );

    return (
      <View style={styles.screen}>
        <StatusBar hidden />
        <View style={styles.screenTab}>
          <View>
            <TouchableNativeFeedback
              onPress={() => console.log('TODO')}
              background={TouchableNativeFeedback.Ripple(
                'rgba(0, 0, 0, 0.08)',
                true
              )}
            >
              <View style={[styles.iconBase, styles.leftIconBound]}>
                <Icon size={22} name="view-list" color="#727272" />
              </View>
            </TouchableNativeFeedback>
          </View>
          <Text style={styles.screenHeading}>Events</Text>
          <PopupMenu
            actions={this.fillFilterTags()}
            onPress={this.onPopupEvent}
            icon={'filter-list'}
            size={22}
            color={'#727272'}
          />
        </View>
        <View style={styles.scrollArea}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {EventList}
          </ScrollView>
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
    // borderTopColor: '#FFFFFF',
  },

  screenTab: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    elevation: 0,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#EEEEEE',
  },

  iconBase: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
  },

  leftIconBound: {
    left: 0,
  },

  screenHeading: {
    color: '#343434',
    fontSize: 18,
    fontFamily: 'Roboto',
  },

  scrollArea: {
    paddingBottom: 56,
  },

  card: {
    paddingTop: 12,
    paddingBottom: 12,
  },

  imageContainer: {
    backgroundColor: '#2D3645',
    borderRadius: 2,
    elevation: 4,
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

  herotitle: {
    color: '#000',
    flexWrap: 'wrap',
    fontSize: 18,
    opacity: 0.7,
    fontFamily: 'Roboto',
  },

  subtitle: {
    color: '#000',
    fontSize: 13,
    opacity: 0.5,
    fontFamily: 'Roboto',
  },
});
