import React from "react";
import { View,Text,StyleSheet } from "react-native";


export default function Footer() {

    return (
        <View style={Styles.container}>
            <Text style ={Styles.textStyle}>All rights reserved by Little Lemon, 2024</Text>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex:1,
        borderRadius:6,
        backgroundColor:'#EE9972',
        alignItems:'center',
        justifyContent:'center',

    },
    textStyle:{
        color:'black',
        fontSize:15,
        
    }
})