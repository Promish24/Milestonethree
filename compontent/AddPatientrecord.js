import React, { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  name,
  TouchableOpacity,
  Text,
} from "react-native";

const AddPatientrecord = ({ route,navigation }) => {

  const {id} = route.params;
  const date = new Date()
const currentDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
   
  const [bloodPressure, setBloodPressure] = useState(" ")
  const [respiratoryRate, setRespiratoryRate] = useState(" ")
  const [bloodOxygenLevel, setBloodOxygenLevel] = useState(" ")
  const [heartBeatRate, setHeartBeatRate] = useState(" ")

  const handleAddRecord = () => {
    const data={date:currentDate, bloodOxygenLevel,bloodPressure,heartBeatRate,respiratoryRate,patient: id}
    fetch("http://localhost:4000/clinicalTests", {
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
    navigation.navigate("Listofpatient");

      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text>Patient Name: Promish Khaniya</Text>
      <Text>Date: {currentDate}</Text>
      <Text>Heartbeat Rate</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={name}
        onChangeText={setHeartBeatRate}
      />
      <Text>Blood Pressure:</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={name}
        onChangeText={setBloodPressure}
      />

      <Text>Respiratory Rate:</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={name}
        onChangeText={setRespiratoryRate}
      />
      <Text>Blood Oxygen level:</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={name}
        onChangeText={setBloodOxygenLevel}
      />

      <TouchableOpacity
        onPress={handleAddRecord}
        style={styles.button}
      >
      <Text style={styles.buttonText}>Add </Text>
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

export default AddPatientrecord;
