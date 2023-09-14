import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView, StyleSheet } from 'react-native';

function PotentialMatches() {
    const [users, setUsers] = useState([]);
  
  useEffect(() => {
     fetch('https://dummyjson.com/users')
          .then((response) => response.json())
          .then((data) => {
            console.log(data.users);
            setUsers(data.users);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
        {users.length > 0 ? (
          users.map((user) => (
            <View style={styles.card} key={user.id}>
              <Text>Name: {user.firstName}</Text>
              <Text>Age: {user.age}</Text>
              <Image source={{uri: user.image}}
                style={{width: 400, height: 400}}/>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 3,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
  });
  
  
export default PotentialMatches;