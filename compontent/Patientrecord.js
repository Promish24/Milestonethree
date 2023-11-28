import React ,{useState}from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View,  Button, StyleSheet, TextInput, name, setName,Text,TouchableOpacity, ScrollView, ActivityIndicator  } from 'react-native';

    const Patientrecord = ( {route, navigation}) => {
      const { id } = route.params;
    const handleAddRecordView = () => {
        navigation.navigate('AddPatientrecord', {
          id:id
        })
      };
      const [isLoading, setLoading]  = useState(true)
      const [patientData, setPatientData] = useState({});
     
      useFocusEffect(
        React.useCallback(() => {
          fetch(`http://127.0.0.1:4000/patients/${id}`) // Replace with your API endpoint
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              setLoading(false)
              setPatientData(data.patientData);
            })
            .catch((error) => {
              console.log(error);
            });
          return () => {};
        }, [])
      );
    
  return (
    <ScrollView style={styles.container}>
      {
        isLoading ? <ActivityIndicator></ActivityIndicator> : 
        <View>
          <Text style={styles.boldText}>Patient Detail</Text>
            <Text>
              {patientData.first_name}
            </Text>
            <Text>
              {patientData.gender}
            </Text>
            <Text>
              {patientData.phone}
            </Text>
    
         <Text style={styles.boldText}>Health Records</Text>

          <View>
            
          {patientData.records && patientData.records.length > 0 ? patientData.records.map((item,id) => (
          <View key={id} style={styles.eachRecord}>
            <Text>Blood Oxygen level</Text>
            <Text>{item.bloodOxygenLevel}</Text>
            <Text>Blood Pressure level</Text>
             <Text>{item.bloodPressure}</Text>
                 <Text>Heartbeat</Text>
                             <Text>{item.heartBeatRate}</Text>
                      <Text>Respiratory Rate</Text>
                      <Text>{item.respiratoryRate}</Text>
                      
            </View>
            )) : 
            <Text>
              There are no records.</Text>}

              <TouchableOpacity
                        onPress={handleAddRecordView}
                        style={styles.Button}
                      >
                        <Text style={styles.buttonText}>Add Record</Text>
              </TouchableOpacity>
      
          </View>
        </View>
      }
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  eachRecord:{
    marginVertical: 10
  },
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
      marginTop:10,
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