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

  renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {section.title}
        </Text>
      </View>
    );
  };

  renderContent = section => {
    return (
      <View style={styles.content}>
        <Text>
          {section.content}
        </Text>
      </View>
    );
  };
  render() {
    return (
      <ScrollView>
        <Accordion
          sections={InfoData}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          underlayColor={'#FEFEFE'}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F7F7F7',
    padding: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
});
