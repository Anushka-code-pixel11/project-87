import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';

export const AppStackNavigator = createStackNavigator({
  ExchangeList : {
    screen : ExchangeScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  HomeScreen : {
    screen : HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'ItemAddedList'
  }
);
