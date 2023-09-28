import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function ProfileScreen({ navigation }) {
  const [user, setUser] = useState('');

  const getUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('userData');

      if (userDataString !== null) {
        const userData = JSON.parse(userDataString);
        console.log('User data retrieved:', userData);
        setUser(userData);
   
      } else {
        console.log('No user data found');
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <SafeAreaView>
        <View>
            <Text>Hello World</Text>
            <Text>{user.userName}</Text>
            <Text>{user.age}</Text>
        </View>
    </SafeAreaView>
    
  );
}

export default ProfileScreen;