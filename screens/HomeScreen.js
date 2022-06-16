import React from 'react'
import { SafeAreaView, Text, StyleSheet, Image, View  } from 'react-native'
import Signin from '../data/google/Signin'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={{ height: 300, width: 300}} source={require('../assets/icon.png')} />
        </View>
        <Signin />
    </SafeAreaView>
  )
}

export default HomeScreen

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
        marginTop: 60,
      }
  });