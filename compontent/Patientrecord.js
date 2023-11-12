import React from 'react';
import { View,  Button, StyleSheet, TextInput, name, setName,Text,TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

    const Patientrecord = ({navigation}) => {

    const handleLogin = () => {
        navigation.navigate('AddPatientrecord')
      };

  return (
    <View style={styles.container}>
    <Text style={styles.boldText}>Patient Detail</Text>
      <TextInput
        style={styles.input}
        placeholder="Promish"
      />
      <TextInput
        style={styles.input}
        placeholder="Scarbrough"
      />
      <TextInput
        style={styles.input}
        placeholder="437-254-6711"
      />
    <Text style={styles.boldText}>Health Records</Text>
    <Text>Blood Oxygen level</Text>
    <TextInput
        style={styles.input}
        placeholder="98% sp02"
      />
    <Text>Blood Pressure level</Text>
      <TextInput
        style={styles.input}
        placeholder="120/85 mmHg"
      />
     <Text>Heartbeat</Text>
      <TextInput
        style={styles.input}
        placeholder="77bpm/min"
      />
      <Text>Respiratory Rate</Text>
      <TextInput
        style={styles.input}
        placeholder="120/85 mmHg"
      />
      <Text>Note for doctor</Text>
      <TextInput
        style={styles.noteinput}
        placeholder="Takerest"
      />
      <TouchableOpacity
        onPress={handleLogin}
        style={styles.Button}
      >
        <Text style={styles.buttonText}>Add Record</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      marginTop: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
    },
    recordbutton: {
      backgroundColor: 'gray'
    },
    Button: {
      backgroundColor: "#123248",
      padding:10,
      alignItems:'center',
      marginBottom:10,
      marginTop:20,
    },
    buttonText:{
      color:'#fff'
    },
    boldText: {
      fontWeight: 'bold', // Set the text to be bold
      fontSize: 16, // Adjust the font size as needed
    },
    line: {
      width: '100%',               // Set the width of the line
      borderBottomColor: 'black',  // Color of the line
      borderBottomWidth: 2,       // Width of the line

    },
    noteinput:{
      height:'10%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
    },

    
  });
  

export default Patientrecord;