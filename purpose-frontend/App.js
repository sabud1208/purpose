import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/components/login';
import SignUpScreen from './src/components/SignUp';
import Profile from './src/components/Profile';
import Messages from './src/components/Message'
import PotentialMatchesList from './src/components/PotentialMatches';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const user = true;
const url = "http://localhost:8080/api/users/login";
function App() {

  return (
      <NavigationContainer> 
        {user ?    <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={Profile}/>
          <Tab.Screen name="Potential Matches" component={PotentialMatchesList}></Tab.Screen>
          <Tab.Screen name="Messages" component={Messages}></Tab.Screen>
        
        </Tab.Navigator>:   <Stack.Navigator initialRouteName="Login">  
            <Stack.Screen name='SignUp' component={SignUpScreen}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
            <Stack.Screen name='Profile' component={Profile}/>
        </Stack.Navigator>  }
       
      </NavigationContainer>
  );
}

export default App;