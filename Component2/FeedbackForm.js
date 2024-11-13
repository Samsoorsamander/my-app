import  React, { useState } from 'react'
import {
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    platform,
    Alert
 } from 'react-native'
export default function FeedbackForm () {
    const[firstName, onChangeFirstName] =useState('');
    const[lastName, onChangeLastName] =useState('');
    const[message, onChangeMessage] =useState('');
    const[phone, onPhoneChange] = useState();

    return(
       <KeyboardAvoidingView
       style ={Styles.container}
       behavior={platform ==='ios' ? 'padding':'height'}

       >
         <ScrollView keyboardDismissMode='on-drag'>
            <Text style={Styles.headingSection}> 
                How was your vist to Little Lemon?
            </Text>
            <Text style={Styles.infoSection}>
            Little Lemon is charming neighborhood bistro that 
                serves simple food and classic 
                cocktails in a lively but casual
                enviroment. We would love to 
                hear more about your experience with us!
            </Text>
            <TextInput 
            value={firstName}
            onChangeText={onChangeFirstName}
            style ={Styles.input}
            onFocus={() => Alert.alert('First Name is focused')}
            onBlur={() => Alert.alert('First Name is blurred')}
            clearButtonMode='always'
            placeholder='First Name'
            />
             <TextInput 
            value={lastName}
            placeholder='Last Name'
            onChangeText={onChangeLastName}
            style ={Styles.input}
            />
            <TextInput 
            value={phone}
            placeholder='Phone'
            onChangeText={onPhoneChange}
            style ={Styles.input}
            keyboardType='phone-pad'
            />
             <TextInput 
            value={message}
            placeholder='Message'
            onChangeText={onChangeMessage}
            style ={Styles.input}
            multiline={true}
            />
        </ScrollView>
       </KeyboardAvoidingView>

    )
}

const Styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#495E57'
    },
    input: {
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
        fontSize:16,
        borderColor:'#EDEFEE',
        backgroundColor:'#F4CE14',
    },
    messageInput: {
        height: 100,
        margin:12,
        borderWidth:1,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#F4CE14',
        
    },
    infoSection: {
        fontSize:20,
        padding:20,
        marginVertical:8,
        color: '#EDEFEE',
        textAlign:'center'
    },
    headingSection: {
        fontSize: 28,
        padding: 30,
        marginVertical:8,
        color: '#EDEFEE',
        textAlign:'center',
        backgroundColor:'#495E57'
    }
})