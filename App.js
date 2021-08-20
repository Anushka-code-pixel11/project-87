import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SignupLoginScreen from './screens/SignupLoginScreen'
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    ) 
  }
}

const SwitchNavigator = createSwitchNavigator({
  SignupLoginScreen: {
    screen: SignupLoginScreen
  },

  Drawer: {
    screen: AppDrawerNavigator
  }

});