import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableItem,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export class Home extends Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: () => <Icon size={24} name="home" color="white"/>
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.screenTab}>
          <Text style={styles.screenHeading}>Events</Text>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.Card}>
              <View style={styles.imgblock}></View>
              <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={[styles.block]}>
                  <Text style={styles.title}>First Event Name</Text>
                  <Text style={styles.subtitle}>EVENT VENUE</Text>
                  <Text style={styles.subtitle}>8:30 to 9:20</Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 24,
    backgroundColor: '#EEF1F5',
    flex: 1
  },

  scrollArea: {
    paddingLeft: 18,
    paddingRight: 18,
  },

  imgblock: {
    height: 200,
    backgroundColor: 'red',
    zIndex: 0
  },

  screenTab: {
    height: 56,
    backgroundColor: '#2B2B3E',
    justifyContent: 'center'
  },

  screenHeading: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 18
  },

  block: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 5,
    marginLeft: 18,
    // marginRight: 8,
    marginTop: -4,
    zIndex: 0,
    marginBottom: 4
  },

  Card: {
    // position: 'absolute'
  },

  image: {
    margin: 16,
    height: 72,
    resizeMode: 'contain'
  },

  title: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 15,
    textAlign: 'center',
    opacity: 0.7
  },

  subtitle: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 13,
    textAlign: 'center',
    opacity: 0.5
  }
});