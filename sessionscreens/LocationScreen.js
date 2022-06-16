import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text, SafeAreaView} from 'react-native'
import Header from '../components/sessions/Header'
import LocationBody from '../components/sessions/LocationBody'
import Stories from '../components/sessions/Stories'

const LocationScreen = () => {
  return (
    <SafeAreaView>
        <Header />
        <Stories />
        <LocationBody />

    </SafeAreaView>
  )
}

export default LocationScreen