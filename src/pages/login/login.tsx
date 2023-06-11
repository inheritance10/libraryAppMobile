import React, { useState } from 'react';
import {View, TextInput, TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { login } from '../../api/login';
import { setToken } from '../../storage/storage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const navigation = useNavigation<NavigationProp<Record<string, object>>>();


    const handleLogin = () => {
    let data = {
        email: 'ali@gmail.com',
        password: '151001'
        /*email: email,
        password: password*/
    }

    login(data).then((response) => {
        if(response.status == 201) {
            console.log(response.data);

            setToken(response.data.token);
            navigation.navigate("DashboardStack");
        }
    }).catch((error) => {
        Alert.alert('Giriş bilgileri hatalı')
    })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Login;
