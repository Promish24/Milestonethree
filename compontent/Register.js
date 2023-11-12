import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  name,
  setName,
  Text,
  TouchableOpacity,
} from "react-native";

const Register = ({ navigation }) => {
  const[user_name, setUserName]=useState("")
  const [email, setEmail]= useState()
  const [password, setPassword] = useState("")

  const handleRegister = () => {
    const data={user_name, email,password}
    fetch("http://localhost:4000/sign-up", {
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
        console.log(data);
        navigation.navigate("Login");

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>User Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter User Name"
        value={user_name}
        onChangeText={(value)=>setUserName(value)}
      />
      {/* <Text>Lastname</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Last Name"
        value={name}
        onChangeText={(value)=>setLastname(value)}
      /> */}
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={(value)=>setEmail(value)}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Enter Password"
        value={password}
        onChangeText={(value)=>setPassword(value)}
      />

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
    padding: 16,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  recordbutton: {
    backgroundColor: "gray",
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

export default Register;
