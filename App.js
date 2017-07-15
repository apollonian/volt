import React, {Component} from 'react'
import {NavigationComponent} from 'react-native-material-bottom-navigation'
import {TabNavigator} from 'react-navigation'

import {Events} from './screens/Events'
import {Info} from './screens/Info'
import {MapView} from './screens/MapView'
import {Home} from './screens/Home'

const AppNavbar = TabNavigator({
  Home: {
    screen: Home
  },
  Events: {
    screen: Events
  },
  MapView: {
    screen: MapView
  },
  Info: {
    screen: Info
  }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: '#727272',
      rippleColor: '#FFF',
      backgroundColor: '#FFF',
      shifting: true,
      style: {
        height: 56,
        borderTopWidth: 0.5,
        borderTopColor: '#EEEEEE'
      }
    }
  }
})

class App extends React.Component {
  render() {
    return <AppNavbar/>
  }
}

export default App