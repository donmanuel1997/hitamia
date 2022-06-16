import React, {useState} from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet} from 'react-native'
import { supabase } from '../supabaseClient'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/sessions/Header'
import { TouchableOpacity } from 'react-native'

const ProfileScreen = ({session}) => {
  const navigation = useNavigation();
  const user = supabase.auth.user()

  const handleSignout = () => {
    supabase.auth.signOut()
    navigation.navigate('LoginScreen')
  }
  return (
  <SafeAreaView>
    <Header />
    <View style={{  flexDirection: 'column', alignItems: 'center', marginTop: 10}}>
    <View style={{ 
      backgroundColor: 'white',
      borderWidth: '2',
      borderRadius: '0',
      padding: 10
  }}>
    <Image style={{ 
      width: 200,
      height: 200, }} source={require('../assets/icons/person.png')} />
    </View>
    <View style={{
      justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 7}}> {user.email}, Age</Text>
    </View>
    </View>


    <View>

    </View>
   <Text>Profile </Text>
   <Text>

   </Text>
   <View style={{padding: 20}}>

   <Text> Show me online </Text>
     <View style={{ backgroundColor: 'white', marginBottom: 5}}>
        <Text style={{ padding: 20}}> Online </Text>
     </View>


   <Text>Payment {'&'} Subscription </Text>
     <View style={{ backgroundColor: 'white', marginBottom: 5}}>
        <Text style={{ padding: 20}}> Free Tier Account </Text>
     </View>

     <Text>Connect Support</Text>
     <View style={{ backgroundColor: 'white', marginBottom: 5}}>
        <Text style={{ padding: 20}}> Helpline </Text>
     </View>
     <TouchableOpacity style={styles.button2} onPress={() => handleSignout()}>
        <Text style={styles.buttonText}>Sign Out</Text>
     </TouchableOpacity>
   </View>

  </SafeAreaView>
  )
}

export default ProfileScreen
const styles = StyleSheet.create({
  wrapper : {
      marginTop: 80,
  },
  inputField: {
      borderRadius: 4,
      padding: 19,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: 'pink',
      fontSize: 500,
  },
  button: isValid => ({
      backgroundColor: isValid ? '#fff' : '#000',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 42,
      borderRadius: 4,
      marginBottom: 9,
      flexDirection: 'row',
  }),
  button2: {
      backgroundColor: '#ff6600',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 42,
      borderRadius: 4,
      marginBottom: 9,
  },
  buttonText: {
      fontWeight:  '600',
      fontSize: 15,
      color: 'white'
  },
  inputField: {
      borderRadius: 4,
      padding: 19,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: 'pink',
      fontSize: 500,
  }
})