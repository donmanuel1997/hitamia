import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
    </TouchableOpacity>
    <View style={styles.iconsContainer}>
    <TouchableOpacity>
        <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>
                11
            </Text>
        </View>
        <Image style={styles.icons} source={require('../../assets/icons/message.png')} />
    </TouchableOpacity>
    </View>
</View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 0,
        backgroundColor: '#000',
        paddingBottom: 20,
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    icons: {
        width: 50,
        height: 50,
        margin: 10,
        resizeMode: 'contain',
        tintColor: 'white'
    },
    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 35,
        bottom: 25,
        width: 30,
        height: 18,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,

    },
    unreadBadgeText: {
            color: 'white',
            fontWeight: '600',
    },
    logo: {
        width: 170,
        height: 60,
        resizeMode: 'contain',
    }
})