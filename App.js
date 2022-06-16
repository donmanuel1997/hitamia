import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ForgotScreen from './screens/ForgotScreen';
import WelcomeScreen2 from './screens/WelcomeScreen2';
import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';


export default function App() {
  const Stack = createStackNavigator();
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuth(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session)
      setAuth(session)
    });
  })

  return (
    <NavigationContainer>
    <Stack.Navigator>
    {auth ? 
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{
      headerShown: false,
    }} />
    :
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
      headerShown: false,
    }} /> }
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
      headerShown: false,
    }} /> 
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{
      headerShown: false,
    }} />
    <Stack.Screen name="ForgotScreen" component={ForgotScreen} options={{
      headerShown: false,
    }} />
    <Stack.Screen name="WelcomeScreen2" component={WelcomeScreen2} options={{
      headerShown: false,
    }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
