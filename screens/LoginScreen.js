import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Image, Link } from 'react-native'
import { SafeAreaView } from 'react-native'
import Login from '../data/google/Login'

const LoginScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={{ height: 100, width: 300}} source={require('../assets/icon.png')} />
       </View>
       <Login />

    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container : {
        flex:   1,
        backgroundColor: '#000',
        paddingTop: 50,
        paddingHorizontal: 12,
      },
      logoContainer : {
        alignItems: 'center',
        marginTop: 100,
      }
  });