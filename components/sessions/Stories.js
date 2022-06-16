import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { USERS } from '../../data/users'

const Stories = () => {
  return (
    <View style={{ marginBottom: 1, backgroundColor:  '#000', paddingBottom: 10 }}>
        <View >
                <Text style={{color: '#ff6600', padding: 5, fontSize: 15, fontWeight: '600' }}>Recent Stories</Text>
            
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} alwaysBounceVertical={true} nestedScrollEnabled={true}>
        {USERS.map((story  , index) => (
        <TouchableOpacity key={index}>
            <View style={styles.storyuserbadge}>
                <Text style={styles.storybadgename}>
                    {story.user.length > 7 ? story.user.slice(0,7).toLowerCase() + '....'
                    : story.user.toLowerCase()}
                </Text>
            </View>
            <Image source={{uri: story.image }}  
                style={styles.story} />
        </TouchableOpacity>
                ))}
        </ScrollView>
    </View>
  )
}

export default Stories


const styles = StyleSheet.create({
    story: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginLeft: 18,
        borderWidth: 3,
        borderColor: '#ff8501',
        marginTop: 2
        
    },
    storyuserbadge: {
        backgroundColor: '#FFf',
        position: 'absolute',
        left: 25,
        bottom: 0,
        width: 75,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,

    },
    storybadgename: {
            color: '#ff8501',
            fontWeight: '600',
            paddingRight: 10,
            paddingLeft: 10,
    },
})