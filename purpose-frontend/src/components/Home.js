import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile'
import Messages from './Message'
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();



function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Messages" component={Messages} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;