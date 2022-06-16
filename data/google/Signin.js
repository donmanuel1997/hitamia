import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Image, Link } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Signin = () => {
    const navigation = useNavigation();
  return (
    <View>
        
        <View style={{ marginTop: 120, padding: 30}}>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Image style={{ height: 30, width: 30}} source={require('../../assets/icons/person.png')} />
         
        <Text style={styles.buttonText}> SIGN IN </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
        <Image style={{ height: 30, width: 30}} source={require('../../assets/icons/person2.png')} />
         
        <Text style={styles.buttonText} onPress={() => navigation.navigate('RegisterScreen')}> CREATE ACCOUNT </Text>
        </TouchableOpacity>

        <Text onPress={() => navigation.navigate('ForgotScreen')}  style={{color: 'white', textAlign: 'center'}}> Trouble logging in? </Text>
        </View>
    </View>
  )
}

export default Signin
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
    button: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
        marginBottom: 9,
        flexDirection: 'row',
    },
    button2: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
        marginBottom: 9,
    },
    buttonText: {
        fontWeight:  '600',
        fontSize: 15,
    }
})