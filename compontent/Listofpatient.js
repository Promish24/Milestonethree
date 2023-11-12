import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  Alert,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const Listofpatient = ({ navigation }) => {
  const [pList, setPList] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      fetch("http://127.0.0.1:4000/patients") // Replace with your API endpoint
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setPList(data);
        })
        .catch((error) => {
          console.log(error);
        });

      return () => {};
    }, [])
  );

  const handleLogin = () => {
    navigation.navigate("Addpatient");

  };
  const Patientrecord = () => {
    navigation.navigate("Patientrecord");

  };


  const handleDelete = (id)=>{
    Alert.alert(
      "Delete Confirmation", // Alert title
      "Are you sure you want to delete this patient?", // Alert message
      [
        {
          text: "Cancel",
          onPress: () => console.log("Delete action cancelled"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            fetch(`http://localhost:4000/patients/${id}`, {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                const updatedList = pList.filter(
                  (patient) => patient._id !== id
                );
                setPList(updatedList);
              })
              .catch((error) => {
                console.error(
                  "There was a problem with the fetch operation:",
                  error.message
                );
              });
          },
        },
      ],
      { cancelable: true }
    );
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#999"
        />
      </View>
      <FlatList
        data={pList}
        renderItem={({ item }) => (
          <View style={styles.inputContainer}>
            <View style={styles.nameContainer}>
            <Icon name="eye"  onPress={Patientrecord}size={20} color="#000" style={styles.icon} />
            <Text style={styles.name}>{item.first_name}</Text>
            </View>
            <Icon name="trash" size={15} onPress={()=> handleDelete(item._id)}/>
          </View>
        )}
        keyExtractor={(item) => item._id}
      />
      <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add patient</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 20,
    justifyContent: "top",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    justifyContent:'space-between'
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  icontext: {
    marginTop: 10,
  },
  addpatienticon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  name: {
    padding: 15,
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
  trash:{
    marginRight:90
  },
  nameContainer:{
    flexDirection:'row',
    alignItems:'center'
  }
});

export default Listofpatient;
