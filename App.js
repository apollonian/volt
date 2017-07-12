import React, { Component } from 'react'
import { NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator } from 'react-navigation'

import { Events } from './screens/Events'
import { Info } from './screens/Info'
import { MapView } from './screens/MapView'
import { Home } from './screens/Home'

/**
 * react-navigation's TabNavigator.
 */
const App = TabNavigator({
  Home: { screen: Home },
  Events: { screen: Events },
  MapView: { screen: MapView },
  Info: {screen: Info }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      shifting: false,
      style: {
        height: 60
      },
      tabs: {
        Home: {
          barBackgroundColor: '#37474F'
        },
        Events: {
          barBackgroundColor: '#00796B'
        },
        MapView: {
          barBackgroundColor: '#5D4037'
        },
        Info: {
          barBackgroundColor: '#00796B'
        },
      }
    }
  }
})

export default App