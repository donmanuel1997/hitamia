import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import HomeScreen from '../sessionscreens/HomeScreen';
import MessageScreen from '../sessionscreens/MessageScreen';
import LocationScreen from '../sessionscreens/LocationScreen';
import ProfileScreen from '../sessionscreens/ProfileScreen';
import SearchScreen from '../sessionscreens/SearchScreen';


const Bottomtabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { 
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroudColor: '#ffffff',
        borderRadius: 15,
        height: 90,
        ... styles.shadows
      },
    }}
    initialRouteName='HomeScreen'
    >
    <Tab.Screen name='Home' component={HomeScreen} 
    options={{
      tabBarIcon: ({focused}) => (
        <View>
          <Image source={require('../assets/icons/home.png')}
          resizeMode='contain' style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#e32f45' : '#748c94',
          }} />
        </View>
      )
    }} />
    <Tab.Screen name='Search' component={SearchScreen} 
    
    options={{
      tabBarIcon: ({focused}) => (
        <View>
          <Image source={require('../assets/icons/search.png')}
          resizeMode='contain' style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#e32f45' : '#748c94',
          }} />
        </View>
      )
    }} />
    <Tab.Screen name='Location' component={LocationScreen} 
    
    options={{
      tabBarIcon: ({focused}) => (
        <View>
          <Image source={require('../assets/icons/location.png')}
          resizeMode='contain' style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#e32f45' : '#748c94',
          }} />
        </View>
      )
    }} />


    
    <Tab.Screen name='Profile' component={ProfileScreen}
    
    options={{
      tabBarIcon: ({focused}) => (
        <View>
          <Image source={require('../assets/icons/profile.png')}
          resizeMode='contain' style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#e32f45' : '#748c94',
          }} />
        </View>
      )
    }}  />
    </Tab.Navigator>
  )
}

export default Bottomtabs

const styles = StyleSheet.create({
  shadows : {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
})


