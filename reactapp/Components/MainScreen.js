
import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';

import { createBottomTabNavigator, TabBarBottom } from 'react-navigation'
import HomeTab from './AppTabNavigators/HomeTab'
import LikesTab from './AppTabNavigators/LikesTab'

import SearchTab from './AppTabNavigators/SearchTab'
import ProfileTab from './AppTabNavigators/ProfileTab'

export default class MainScreen extends Component {


    static navigationOptions = {
        title: "Home page"
    }
    render() {
        return (
            <AppTabNavigator />
        );
    }
}


const AppTabNavigator = createBottomTabNavigator({
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
    LikesTab: { screen: LikesTab },
    ProfileTab: { screen: ProfileTab }
}, {
        animationEnabled: true,
        swipeEnabled: true,
        
        tabBarPosition: "bottom",
        tabBarOptions: {
            labelStyle: {
              fontSize: 14,
            },
            tabStyle: {
              width: 100,
            }
          }
    })
