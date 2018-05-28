import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { Icon} from 'native-base';
export default class PlanTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-book" style={{ color: tintColor }} />
    )
}
  render() {
    return (
      <View>
        <Text> PlaneTab </Text>
      </View>
    );
  }
}

