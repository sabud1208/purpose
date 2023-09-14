import React, {useState} from "react";
import { View, Text, TextInput, Button } from 'react-native';


function SignUpScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const url = "http://localhost:8080/api/users/signup";
    const handleSignUp = () => {
        fetch(url, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName: userName,
              email: email,
              password: password
            }),
          })
            .then((response) => response.json())
            .then((responseData) => {
              console.log(JSON.stringify(responseData));
            }).catch(alert);
      navigation.navigate('Login');
    };
  
    return (
    
      <View>
        <Text>Sign Up</Text>
        <TextInput
          placeholder="User Name"
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Sign Up" onPress={handleSignUp} />
      </View>
    
    );
  }

  export default SignUpScreen;