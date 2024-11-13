import  React, { useState } from 'react'
import {Text,StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, platform, View, Pressable } from 'react-native'
import Footer from './Footer';

export default function LoginScreen() {
    const[email, onChageEmail] = useState('');
    const[password, onChangePassword] = useState('');
    const[login, setLogin] = useState(false)
    
    return(

        <>
        {login && (
            <View style={Styles.container}>
            <Text style={Styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={Styles.regularText}>You are Logged in</Text>
            </View>
        )}
        
            {!login && (
                <ScrollView
                style ={Styles.container}
                keyboardDismissMode='on-drag'
                >
                   <Text style ={Styles.headerText}>Welcome to Little Lemon</Text>
                   <Text style ={Styles.regularText}>Login to continue</Text>
                   <TextInput 
                   value={email}
                   style ={Styles.input}
                   placeholder='email'
                   onChangeText={onChageEmail}
                   keyboardType='email-pad'
                   />
                   <TextInput 
                   value={password}
                   style ={Styles.input}
                   placeholder='password'
                   onChangeText={onChangePassword}
                   secureTextEntry={true}
                   />
                   <Pressable
                style={Styles.button}
                onPress={() => setLogin(true)}
                >
                    <Text style={Styles.buttonText}>Login</Text>
    
                </Pressable>
                 
               </ScrollView>
            )}
            
            
        </>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex:1,
    },
    headerText: {
        padding:40,
        fontSize: 30,
        color:'#EDEFEE',
        textAlign:'center'

    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color:'#EDEFEE',
        textAlign:'center'
    },
    input: {
        backgroundColor:'white',
        padding:6,
        margin:10,
        
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 40,
        backgroundColor: '#EDEFEE',
        borderColor:'#EDEFEE',
        borderWidth: 2,
        borderRadius: 12,
    },
    buttonText: {
        color:'#333333',
        textAlign:'center',
        fontSize:32,
        
    },
})