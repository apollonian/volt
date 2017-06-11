import { createRouter } from '../@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import MapScreen from '../screens/MapScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import InfoScreen from '../screens/InfoScreen';

import RootNavigation from './RootNavigation';

export default createRouter(() => ({
  home: () => HomeScreen,
  events: () => EventsScreen,
  map: () => MapScreen,
  schedule: () => ScheduleScreen,
  info: () => InfoScreen,
  rootNavigation: () => RootNavigation
}));
