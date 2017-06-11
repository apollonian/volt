import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Notifications } from 'expo';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '../@expo/ex-navigation';
import { MaterialIcons } from '../@expo/vector-icons';

import Alerts from '../constants/Alerts';
import Colors from '../constants/Colors';
import registerForPushNotificationsAsync
  from '../api/registerForPushNotificationsAsync';

export default class RootNavigation extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return (
      <TabNavigation tabBarHeight={56} initialTab="home">
        <TabNavigationItem
          id="home"
          title="My FE"
          renderIcon={isSelected => this._renderIcon('person', isSelected)}>
          <StackNavigation initialRoute="home" />
        </TabNavigationItem>

        <TabNavigationItem
          id="schedule"
          title="Schedule"
          renderIcon={isSelected => this._renderIcon('access-time', isSelected)}>
          <StackNavigation initialRoute="schedule" />
        </TabNavigationItem>

        <TabNavigationItem
          id="map"
          title="Map"
          renderIcon={isSelected => this._renderIcon('map', isSelected)}>
          <StackNavigation initialRoute="map" />
        </TabNavigationItem>

        <TabNavigationItem
          id="events"
          title="Events"
          renderIcon={isSelected => this._renderIcon('event', isSelected)}>
          <StackNavigation initialRoute="events" />
        </TabNavigationItem>

        <TabNavigationItem
          id="settings"
          title="Info"
          renderIcon={isSelected => this._renderIcon('info', isSelected)}>
          <StackNavigation initialRoute="info" />
        </TabNavigationItem>
      </TabNavigation>
    );
  }

  _renderIcon(name, isSelected) {
    return (
      <MaterialIcons
        name={name}
        size={24}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    this.props.navigator.showLocalAlert(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`,
      Alerts.notice
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  selectedTab: {
    color: Colors.tabIconSelected,
  },
});
