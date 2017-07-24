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
    tabBarIcon: () => <Icon size={24} name="event" color="#252525" />,
  };

  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
      listView: false,
    };
  }

  renderImageBlock = eventImage => {
    if (!this.state.listView)
      return (
        <View style={styles.imageContainer}>
          <Image
            source={eventImage}
            style={{ flex: 1, width: null, height: null, borderRadius: 2 }}
          />
        </View>
      );
  };

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
    let paddingTopUnit = this.state.listView ? 0 : 130;
    let EventList = EventData.filter(
      event =>
        'All' === this.state.filter
          ? true
          : event.eventTag === this.state.filter ? true : false
    ).map(event =>
      <View style={styles.card} key={event.eventID}>
        {this.renderImageBlock(event.eventImage)}
        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate('EventDetails', event)}
          background={TouchableNativeFeedback.Ripple(
            'rgba(0, 0, 0, 0.08)',
            false
          )}
        >
          <View
            style={[
              styles.block,
              { paddingTop: paddingTopUnit, marginTop: -paddingTopUnit },
            ]}
          >
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
                  {event.eventVenueMain}
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
              onPress={() => this.setState({ listView: !this.state.listView })}
              background={TouchableNativeFeedback.Ripple(
                'rgba(0, 0, 0, 0.08)',
                true
              )}
            >
              <View style={[styles.iconBase, styles.leftIconBound]}>
                <Icon size={22} name="view-list" color="#252525" />
              </View>
            </TouchableNativeFeedback>
          </View>
          <Text style={styles.screenHeading}>EVENTS</Text>
          <PopupMenu
            actions={this.fillFilterTags()}
            onPress={this.onPopupEvent}
            icon={'filter-list'}
            size={22}
            color={'#252525'}
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
    backgroundColor: '#75F3BE',
    elevation: 2,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
  },

  screenHeading: {
    color: '#252525',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
  },

  iconBase: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
  },

  leftIconBound: {
    left: 0,
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
    elevation: 2,
    height: 140,
    padding: 0,
    marginLeft: 28,
    marginRight: 28,
  },

  block: {
    backgroundColor: '#fff',
    borderRadius: 2,
    elevation: 0,
    marginRight: 20,
    marginLeft: 36,
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
    color: '#505050',
    fontWeight: '500',
  },

  // blockInfoTimeDuration: {
  //   color: '#757575',
  //   fontSize: 14,
  // },

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
    color: '#252525',
    flexWrap: 'wrap',
    fontSize: 18,
    fontFamily: 'Roboto',
    marginBottom: 2,
  },

  subtitle: {
    color: '#505050',
    fontSize: 14,
    fontFamily: 'Roboto',
  },
});
