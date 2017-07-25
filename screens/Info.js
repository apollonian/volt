import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { InfoData } from '../assets/InfoData';

export class Info extends Component {
  // react-navigation specific options
  static navigationOptions = {
    tabBarLabel: 'Info',
    tabBarIcon: () => <Icon size={24} name="info" color="#252525" />,
  };

  // Renders the collapsible's / accordion's header
  renderHeader = (section, index, isActive) => {
    return (
      <View style={styles.header}>
        <Text style={styles.sectionText}>
          {section.title}
        </Text>
        {isActive
          ? <Icon size={24} name="keyboard-arrow-up" color="#727272" />
          : <Icon size={24} name="keyboard-arrow-down" color="#727272" />}
      </View>
    );
  };

  // Renders the collapsible's /accordion's content
  renderContent = section => {
    return (
      <View style={styles.content}>
        {section.content}
      </View>
    );
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.screenTab}>
          <Text style={styles.screenHeading}>INFO</Text>
        </View>
        <ScrollView>
          <View style={styles.infoArea}>
            <Text style={styles.versionText}>0.1.1b</Text>

            <Text style={styles.logoText}>RACEDAY</Text>
            <Text style={{ marginTop: 7, color: '#959595' }}>__</Text>
            <Text style={styles.descriptionText}>Team Volt</Text>
            <Text style={styles.secondarydescriptionText}>#UNITEDBYHCL</Text>
          </View>
          <Accordion
            sections={InfoData}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            underlayColor={'#FEFEFE'}
          />
        </ScrollView>
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
    elevation: 1,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
  },

  screenHeading: {
    marginTop: 2,
    color: '#252525',
    fontFamily: 'worksans-semibold',
    fontSize: 15,
  },

  header: {
    backgroundColor: '#FDFDFD',
    borderBottomWidth: 0.5,
    borderBottomColor: '#F7F7F7',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },

  infoArea: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 48,
    paddingBottom: 48,
  },

  logoText: {
    color: '#252525',
    fontSize: 24,
    fontFamily: 'worksans-bold',
  },

  content: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'rgb(248, 248, 250)',
  },

  versionText: {
    fontSize: 12,
    fontFamily: 'chivo-regular',
    color: '#909090',
  },

  descriptionText: {
    color: '#505050',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 4,
    fontFamily: 'rubik-semibold',
  },

  secondarydescriptionText: {
    fontSize: 16,
    fontFamily: 'rubik-light',
  },

  sectionText: {
    fontFamily: 'worksans-regular',
    fontSize: 14,
  },
});
