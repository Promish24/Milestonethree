
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity , StyleSheet,Image } from 'react-native';


const Login = ({navigation}) => {
  const [user_name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  // const handleLogin = async () => {
  //   navigation.navigate('Listofpatient')
  // };
  
  const handlelogin = async () =>{
    // if (username && password) {
    //   const user = { username, password };
    //   await AsyncStorage.setItem('user', JSON.stringify(user));
    //   navigation.navigate('Listofpatient')
    // }
    const data={user_name,password}
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
       // console.log(data);
        navigation.navigate('Listofpatient');

      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleRegister = () => {
    navigation.navigate('Register')
  };

  return (
    <View style={styles.container}>
        <Image
        source={require('../assets/Logo.jpg')} 
        style={styles.image}
      />
      <Text style={styles.title}>CLINICAL DBMS</Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter User Name "
        value={user_name}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
       <TouchableOpacity
        onPress={handlelogin}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleRegister}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor:"#123248",
    alignItems:"center",
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    marginBottom:20,
  },  
  button: {
    backgroundColor: "#123248",
    padding:10,
    alignItems:'center',
    marginBottom:10
  },
  buttonText:{
    color:'#fff'
  },
});

export default Login;
