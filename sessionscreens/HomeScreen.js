import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text, SafeAreaView} from 'react-native'
import Header from '../components/sessions/Header'
import HomeBody from '../components/sessions/HomeBody'
import Stories from '../components/sessions/Stories'

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <Header />
        <Stories />
        <HomeBody />

    </SafeAreaView>
  )
}

export default HomeScreen