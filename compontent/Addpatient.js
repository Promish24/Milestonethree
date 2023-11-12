import React,{useState} from "react";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  name,
  setName,
  TouchableOpacity,
  Text,
} from "react-native";

const Listofpatient = ({ navigation }) => {
  const[first_name, setFirstName]=useState("")
  const[fathername, setFathername]= useState("")
  const [age, setAge]= useState()
  const [gender,setGender] = useState("")
  const [payment, setPayment] = useState("")
  const [address, setAddress]= useState("")
  const [phone, setPhone] = useState("")
  const handleAdd = () => {
    const data={first_name, fathername,age,gender,payment,address,phone}
    fetch("http://localhost:4000/patients", {
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
      <Text>First Name</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={first_name}
        onChangeText={(value)=>setFirstName(value)}
      />
      <Text>Father Name</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={fathername}
        onChangeText={(value)=>setFathername(value)}
      />
      <Text>Age</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={age}
        onChangeText={(value)=>setAge(value)}
      />
      <Text>Gender</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={gender}
        onChangeText={(value)=>setGender(value)}
      />
      <Text>Payment</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={payment}
        onChangeText={(value)=>setPayment(value)}
      />
      <Text>Address</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={address}
        onChangeText={(value)=>setAddress(value)}
      />
      <Text>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={phone}
        onChangeText={(value)=>setPhone(value)}
      />
        <TouchableOpacity
        onPress={handleAdd}
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
  addbtn: {
    marginBottom: 10,
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

export default Listofpatient;
