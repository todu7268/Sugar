import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('http://localhost:3000/login', { username, password })
      .then(response => {
        alert(response.data);
        if (response.data === 'Login successful') {
          navigation.navigate('Home');
        }
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <View>
      <Text>Login Page</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" value={password} secureTextEntry={true} onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default Login;
