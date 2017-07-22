import React from 'react';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator, StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Events } from '../screens/Events';
import { Info } from '../screens/Info';
import { MapScreen } from '../screens/MapScreen';
import { Home } from '../screens/Home';
import { EventDetails } from '../screens/EventDetails';

export const Tabs = TabNavigator(
  {
    Home: {
      screen: Home,
    },
    Events: {
      screen: Events,
    },
    MapScreen: {
      screen: MapScreen,
    },
    Info: {
      screen: Info,
    },
  },
  {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: '#343434',
        rippleColor: '#BDBDBD',
        backgroundColor: '#FFFFFF',
        shifting: false,
        style: {
          height: 56,
          borderTopWidth: 0.5,
          borderTopColor: '#EEEEEE',
        },
        tabs: {
          Home: {
            activeIcon: <Icon size={24} name="home" color="#343434" />,
          },
          Events: {
            activeIcon: <Icon size={24} name="event" color="#343434" />,
          },
          MapScreen: {
            activeIcon: <Icon size={24} name="map" color="#343434" />,
          },
          Info: {
            activeIcon: <Icon size={24} name="info" color="#343434" />,
          },
        },
      },
    },
  }
);

export const Root = StackNavigator(
  {
    Tabs: {
      screen: Tabs,
    },
    EventDetails: {
      screen: EventDetails,
    },
  },
  {
    transitionConfig: () => ({
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
    mode: 'card',
    headerMode: 'none',
  }
);
