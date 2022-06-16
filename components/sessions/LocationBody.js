import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { USERS } from '../../data/users'

const LocationBody = () => {
  return (
    <View style={{  marginBottom: 10, backgroundColor:  '#000', paddingBottom: 10, height: 650, padding: 5 }}>
        <View>
                <Text style={{color: '#ff6600', paddingTop: 8, paddingLeft: 12, fontSize: 15, fontWeight: '700', paddingBottom: 15, }}> Nearby </Text>
            
        </View>
        <ScrollView style={{backgroundColor: 'white'}} showsVerticalScrollIndicator={false} alwaysBounceVertical={true} nestedScrollEnabled={true}>
        
        {USERS.map((story  , index) => (
        <View key={index} style={{ flexDirection: 'row', backgroundColor: 'black', margin: 1,}}>
            <View style={{ paddingTop: 5,}}>
             <Image source={{uri: story.image }}  
                style={styles.story} />
            </View>
            <View style={{ display: 'flex',  flex: 1, margin: 15, justifyContent: 'space-between'}}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text style={{ marginLeft: 10, marginTop: 1,   color: 'white', fontWeight: '600'}}>
                    {story.user} 
                </Text>
                
                <View style={{ justifyContent: 'center', flexDirection: 'row'}}>
                <Image source={require('../../assets/icons/location.png')}
                    style={{
                    width: 15,
                    height: 15,
                    tintColor: '#e32f45',
                    }} />
                <Text style={{ color: 'white', marginLeft: 10}}>
          {story.location} Away</Text>
          </View>
                </View>
                <View style={{ }}>
                <Text style={{ marginLeft: 6, color: 'white', }}> 
                Status: {story.status} ...
                </Text>
                </View>
                <View  style={{  flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, }}>
                <TouchableOpacity style={{borderRadius: 50, marginRight: 5,  justifyContent: 'center', alignItems: 'center', backgroundColor: 'white',  padding: 7, borderRadius: 50 }}>
                    <Image 
                    source={require('../../assets/icons/user-profile.png')}
                    style={{width:30,height:30}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius: 50, marginRight: 5, backgroundColor: 'white',  padding: 7, borderRadius: 50 }}>
                    <Image 
                    source={require('../../assets/icons/new-message.png')}
                    style={{width:30,height:30}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{borderRadius: 50, marginRight: 5, backgroundColor: 'white',  padding: 7, borderRadius: 50 }}>
                    <Image 
                    source={require('../../assets/icons/share.png')}
                    style={{width:30,height:30}}
                    />
                </TouchableOpacity>
                </View>
            </View>


            
           
        </View>
                ))}
        </ScrollView>
    </View>
  )
}

export default LocationBody

const styles = StyleSheet.create({
    story: {
        width: 110,
        height: 110,
        borderRadius: 10,
        marginLeft: 18,
        borderWidth: 1,
        borderColor: '#ff6600',
        marginTop: 5,
        marginBottom: 30
        
    },
    storyuserbadge: {
        position: 'absolute',
        left: 95,
        bottom: 0,
        width: 35,
        height: 35,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        top: 83,
        zIndex: 100,
        shadowOpacity: 0.75,
        shadowRadius: 3.5,
        elevation: 5,

    },
    storybadgename: {
            color: '#000',
            fontWeight: '600',
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 2,
            top: 1
    },

    storylogos: {
        fontWeight: '600',
        paddingRight: 10,
        paddingLeft: 10,
        top: 10,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 140,
        zIndex: 100,
        top: 390,
        shadowOpacity: 0.75,
        shadowRadius: 3.5,
        elevation: 5,
        
},
})