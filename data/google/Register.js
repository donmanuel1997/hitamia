import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { supabase } from '../../supabaseClient'
import { ToastContainer, toast } from 'react-toastify';
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Validator } from 'email-validator'



const Register = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false)

    const [useremail, setUseremail] = useState()
    const [userpassword, setPassword] = useState()
    const [auth, setAuth] = useState(false);

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
                let { user, session, error } = supabase.auth.signUp({
                    email: values.email,
                    password: values.password,
                },
                setAuth(supabase.auth.session()))
            }catch(error){
                alert(error)
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
               <Text style={styles.buttonText}> Create Account</Text>
            </TouchableOpacity>


        </View>
        <View style={{padding:30}}>
            <Text style={{color: 'white', textAlign: 'center'}}>
               Already have an account?  Login now.
            </Text>
            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('LoginScreen')}>
               <Text style={styles.buttonText}> SIGN IN</Text>
            </TouchableOpacity>
        </View>
        </>
        )
            }
        </Formik>
    </View>
  )
}

export default Register
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