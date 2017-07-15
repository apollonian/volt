import React, { Component } from 'react';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Events } from './screens/Events';
import { Info } from './screens/Info';
import { MapView } from './screens/MapView';
import { Home } from './screens/Home';

const AppNavbar = TabNavigator(
  {
    Home: {
      screen: Home,
    },
    Events: {
      screen: Events,
    },
    MapView: {
      screen: MapView,
    },
    Info: {
      screen: Info,
    },
  },
  {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      bottomNavigationOptions: {
        labelColor: '#212121',
        rippleColor: '#FFF',
        backgroundColor: '#FFF',
        shifting: true,
        style: {
          height: 56,
          borderTopWidth: 0.5,
          borderTopColor: '#EEEEEE',
        },
        tabs: {
          Home: {
            activeIcon: <Icon size={24} name="home" color="#212121" />,
          },
          Events: {
            activeIcon: <Icon size={24} name="event" color="#212121" />,
          },
          MapView: {
            activeIcon: <Icon size={24} name="map" color="#212121" />,
          },
          Info: {
            activeIcon: <Icon size={24} name="info" color="#212121" />,
          },
        },
      },
    },
  }
);

class App extends Component {
  render() {
    return <AppNavbar />;
  }
}

export default App;
