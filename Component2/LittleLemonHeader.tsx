import * as React from 'react';
import { View,Text, StyleSheet } from 'react-native'


export default function LittleLemonHeader(){
    return (
        <View  style= {Styles.container}>
            <Text style ={{padding: 40, fontSize:30, color:'black'}}>
                 Little Lemon 
            </Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 0.2,
        backgroundColor:'#EE9972',
        alignItems:'center'
        }
})
