
import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';

import { createBottomTabNavigator, TabBarBottom } from 'react-navigation'
import HomeTab from './AppTabNavigators/HomeTab'
import LikesTab from './AppTabNavigators/LikesTab'

import PlanTab from './AppTabNavigators/PlanTab'
import ProfileTab from './AppTabNavigators/ProfileTab'

export default class MainScreen extends Component {


    render() {
        return (
            <AppTabNavigator />
        );
    }
}


const AppTabNavigator = createBottomTabNavigator({
    发现: { screen: HomeTab },
    学习计划: { screen: PlanTab },
    收藏: { screen: LikesTab },
    我的: { screen: ProfileTab }
}, {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            labelStyle: {
              fontSize: 12,
            },
            tabStyle: {
              width: 100,
            }
          }
    })
