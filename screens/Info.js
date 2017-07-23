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
        <Text style={styles.headerText}>
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
            <Text style={styles.logoText}>RACEDAY</Text>
            <Text style={styles.versionText}>0.1.0b</Text>
            <Text style={{ marginTop: 7 }}>__</Text>
            <Text style={styles.descriptionText}>
              Developed by <Text style={{ fontWeight: '700' }}>Team Volt</Text>
            </Text>
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
    elevation: 2,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
  },

  screenHeading: {
    color: '#252525',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
  },

  header: {
    backgroundColor: '#FDFDFD',
    borderBottomWidth: 0.5,
    borderBottomColor: '#F7F7F7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },

  headerText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Roboto',
  },

  content: {
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 20,
    paddingTop: 16,
  },

  infoArea: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 48,
    paddingBottom: 40,
  },

  logoText: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Roboto',
  },

  versionText: {
    fontSize: 12,
  },

  descriptionText: {
    fontSize: 16,
    marginTop: 7,
    marginBottom: 2,
    fontFamily: 'Roboto',
  },

  secondarydescriptionText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
});
