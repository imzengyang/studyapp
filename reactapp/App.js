/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import MainScreen from "./Components/MainScreen";

const AppStackNavigator = StackNavigator({
  Main:{
    screen: MainScreen
  }
})

export default class App extends Component {
  render() {
    return (
      <MainScreen />
    );
  }
}
