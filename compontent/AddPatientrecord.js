import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  name,
  setName,
  Text,
} from "react-native";

const AddPatientrecord = ({ navigation }) => {

  const handleLogin = () => {
    navigation.navigate("Patientrecord");
  };

  return (
    <View style={styles.container}>
      <Text>Promish Khaniya</Text>

      <TextInput
        style={styles.input}
        placeholder=""
        value={name}
        onChangeText={setName}
      />
      <Text>Date of birth</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={name}
        onChangeText={setName}
      />
      <Text>Blood Pressure</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={name}
        onChangeText={setName}
      />

      <Text>Respiratory Rate</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={name}
        onChangeText={setName}
      />
      <Text>Blood Oxygen level</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={name}
        onChangeText={setName}
      />
      <Button title="Update" onPress={handleLogin} color={"#123248"} />
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
});

export default AddPatientrecord;
