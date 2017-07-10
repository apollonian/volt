import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class App extends React.Component {
  render() {
    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        onTabChange={(newTabIndex) => console.log(`New Tab at position ${newTabIndex}`)}
      >
        <Tab
          barBackgroundColor="#37474F"
          label="Home"
          icon={<Icon size={24} color="white" name="tv" />}
        />
        <Tab
          barBackgroundColor="#00796B"
          label="Events"
          icon={<Icon size={24} color="white" name="music-note" />}
        />
        <Tab
          barBackgroundColor="#5D4037"
          label="Map"
          icon={<Icon size={24} color="white" name="book" />}
        />
        <Tab
          barBackgroundColor="#3E2723"
          label="Info"
          icon={<Icon size={24} color="white" name="collections" />}
        />
      </BottomNavigation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
