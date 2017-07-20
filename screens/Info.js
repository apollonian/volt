import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Accordion from 'react-native-collapsible/Accordion';
import { InfoData } from '../assets/InfoData';

export class Info extends Component {
  static navigationOptions = {
    tabBarLabel: 'Info',
    tabBarIcon: () => <Icon size={24} name="info" color="#727272" />,
  };

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

  renderContent = section => {
    return (
      <View style={styles.content}>
        <Text style={styles.contentText}>
          {section.content}
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.screenTab}>
          <Text style={styles.screenHeading}>Info</Text>
        </View>
        <ScrollView>
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
    backgroundColor: '#FFFFFF',
    elevation: 0,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#EEEEEE',
  },

  screenHeading: {
    color: '#343434',
    fontFamily: 'Roboto',
    fontSize: 18,
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
  },

  content: {
    backgroundColor: '#FFFFFF',
    padding: 16,
  },

  contentText: {
    fontSize: 16,
  },
});
