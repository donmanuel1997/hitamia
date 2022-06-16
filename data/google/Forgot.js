import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Forgot = () => {
    const navigation = useNavigation();
  return (
    <View>
        <View style={{ marginTop: 90, paddingLeft: 30, paddingRight: 30}}>
            <Text style={{color: 'white', textAlign: 'center', paddingBottom: 10, fontSize: 30}}>
                Account Recovery
            </Text>
            <Text style={{color: 'white', paddingBottom: 10, fontSize: 15}}>
                Do you have troubles accessing your account? We can help you recover your password via your Email account.
            </Text>
        <View>
        <TextInput style={styles.inputField}
        placeholderTextColor='#fff'
        placeholder='Email address'
        autoCapitalize='none'
        autoComplete='false'
        color="white"
        fontSize= '15'
        borderColor= '#fff'
        borderWidth= '1'
        />
        </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WelcomeScreen')}>
               <Text style={styles.buttonText}> Reset Password </Text>
            </TouchableOpacity>

        </View>
        <View style={{padding:30}}>
            
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('LoginScreen')}>
               <Text style={styles.buttonText}> Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Forgot


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
        backgroundColor: '#ff6600',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
        marginBottom: 9,
    },
    buttonText: {
        fontWeight:  '600',
        fontSize: 15,
    },
    inputField: {
        borderRadius: 4,
        padding: 19,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'pink',
        fontSize: 500,
    }
})