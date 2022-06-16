import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { USERS } from '../../data/users'

const HomeBody = () => {
  return (
    <View style={{ marginBottom: 10, backgroundColor:  '#000', paddingBottom: 10, height: 550 }}>
        <View>
                <Text style={{color: '#ff6600', paddingTop: 18, paddingBottom: 10, paddingLeft: 12, fontSize: 15, fontWeight: '700' }}> Hitamia Premium </Text>
            
        </View>
        <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical={true} nestedScrollEnabled={true}>
        
        {USERS.map((story  , index) => (
        <View key={index}>
            <View style={styles.storyuserbadge}>
                <Text style={styles.storybadgename}>
                    {story.user.length > 10 ? story.user.slice(0,10).toLowerCase() + '....'
                    : story.user.toLowerCase()}
                </Text>
            </View>

            <View  style={{ flexDirection: 'row', justifyContent: 'space-between', ... styles.storylogos}}>

                    <TouchableOpacity style={{backgroundColor: 'white', padding: 10, borderRadius: 50, marginRight: 5}}>
                    <Image 
                    source={require('../../assets/icons/share.png')}
                    style={{width:30,height:30}}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', padding: 10, borderRadius: 50, marginRight: 5}}>
                    <Image 
                    source={require('../../assets/icons/user-profile.png')}
                    style={{width:30,height:30}}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', padding: 10, borderRadius: 50}}>
                    <Image 
                    source={require('../../assets/icons/new-message.png')}
                    style={{width:30,height:30}}
                    />
                    </TouchableOpacity>

                   
                </View>
            <Image source={{uri: story.image }}  
                style={styles.story} />
        </View>
                ))}
        </ScrollView>
    </View>
  )
}

export default HomeBody

const styles = StyleSheet.create({
    story: {
        width: 350,
        height: 400,
        borderRadius: 10,
        marginLeft: 18,
        borderWidth: 3,
        borderColor: '#fff',
        marginTop: 2,
        marginBottom: 30
        
    },
    storyuserbadge: {
        backgroundColor: '#FFf',
        position: 'absolute',
        left: 25,
        bottom: 0,
        width: 135,
        height: 38,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        top: 395,
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
        marginLeft: 240,
        zIndex: 100,
        top: 390,
        shadowOpacity: 0.75,
        shadowRadius: 3.5,
        elevation: 5,
        
},
})