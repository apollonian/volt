import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView, TouchableNativeFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export class Home extends Component {
  static navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: () => <Icon size={24} name="home" color="#727272"/>
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.screenTab}>
          <Text style={styles.screenHeading}>EVENTS</Text>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
              <View style={styles.imgblock}></View>
              <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.06)', false)}>
                <View style={styles.block}>
                  <View style={styles.blockInfo}>
                    <View style={styles.blockInfoTime}>
                      <Text style={styles.blockInfoTimeChunk}>14:00</Text>
                    </View>
                    <View style={styles.blockInfoEvent}>
                      <Text style={styles.herotitle}>Federation of Drone Racing</Text>
                      <Text style={styles.subtitle}>
                        <Text style={styles.blockInfoTimeDuration}>90min</Text>
                        &nbsp;&bull;&nbsp;Race Track
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableNativeFeedback>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 24,
    backgroundColor: '#EEF1F5',
    flex: 1
  },

  screenTab: {
    height: 56,
    backgroundColor: '#202D3D',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },

  screenHeading: {
    color: 'white',
    fontFamily: 'pathway-gothic-one',
    fontSize: 24
  },

  card: {
    paddingTop: 40
  },

  imgblock: {
    height: 160,
    backgroundColor: '#2D3645',
    marginLeft: 32,
    marginRight: 32,
    elevation: 12,
    borderRadius: 6,
    padding: 0
  },

  block: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 6,
    marginLeft: 24,
    marginRight: 40,
    marginTop: -150,
    paddingTop: 150,
    elevation: 0,
    height: 240,
    marginBottom: 4
  },

  blockInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 90
  },

  blockInfoTime: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  blockInfoEvent: {
    width: 0,
    flexGrow: 1,
    paddingLeft: 24
  },

  blockInfoTimeChunk: {
    color: '#343434'
  },

  blockInfoTimeDuration: {
    color: '#BDBDBD',
    fontSize: 13
  },

  image: {
    margin: 16,
    height: 72,
    resizeMode: 'contain'
  },

  herotitle: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 18,
    opacity: 0.7,
    flexWrap: 'wrap'
  },

  subtitle: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 13,
    opacity: 0.5
  }
})