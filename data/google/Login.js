import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Validator } from 'email-validator'
import { supabase } from '../../supabaseClient'
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const navigation = useNavigation();

    const RegistrationFormSchema = Yup.object().shape({
        email: Yup.string().email().required('A Valid Email is Required!'),
        password: Yup.string()
                .required()
                .min(8, 'Your password has to have least 8 characters')
    })

  return (
    <View>
       <Formik
        initialValues={{ email: '', password: ''}}
        onSubmit={(values) => {
            try{
                let { user, session, error } = supabase.auth.signIn({
                    email: values.email,
                    password: values.password,
                },
                navigation.navigate('WelcomeScreen2'))
            }catch(error){
                console.log(error.message)
            }
        }}
        validationSchema={RegistrationFormSchema}
        validateOnMount={true}>
            {({handleChange, handleBlur, handleSubmit, values, isValid}) =>
            (
            <>
        <View style={{ marginTop: 120, padding: 30}}>
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
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        autoFocus={true}
        />

        <TextInput 
        style={styles.inputField}
        placeholderTextColor='#fff'
        placeholder='Password'
        autoCapitalize='none'
        autoComplete='false'
        borderColor= '#fff'
        borderWidth= '1'
        secureTextEntry={true}
        textContentType='password'
        color="white"
        fontSize= '15'
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        />
        </View>

            <TouchableOpacity style={styles.button(isValid)}  onPress={handleSubmit}>
               <Text style={styles.buttonText}> Login </Text>
               
            </TouchableOpacity>



        </View>
        <View style={{padding:30}}>
            <Text style={{color: 'white', textAlign: 'center'}}>
               Don't have an account?  Create a new account now.
            </Text>
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('RegisterScreen')}>
               <Text style={styles.buttonText}> Create Account </Text>
            </TouchableOpacity>
        </View>
        </>
        )
            }
        </Formik>
    </View>
  )
}

export default Login

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
    button: isValid => ({
        backgroundColor: isValid ? '#fff' : '#000',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
        marginBottom: 9,
        flexDirection: 'row',
    }),
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