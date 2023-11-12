import { StyleSheet, Text, View } from 'react-native';
import Login  from './compontent/Login';
import Listofpatient from "./compontent/Listofpatient"
import Addpatient from './compontent/Addpatient';
import Patientrecord from './compontent/Patientrecord';
import Register from './compontent/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddPatientrecord from'./compontent/AddPatientrecord';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Listofpatient" component={Listofpatient} />
        <Stack.Screen name="Addpatient" component={Addpatient} />
        <Stack.Screen name="Patientrecord" component={Patientrecord} />
        <Stack.Screen name="AddPatientrecord" component={AddPatientrecord} />
        <Stack.Screen name="Register" component={Register} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
