import React from "react";
import { 
    Text,
    StyleSheet,
    Image,
    ScrollView,
    useColorScheme,
    useWindowDimensions
 } from "react-native";
export default function Welcome2() {
    const window =useWindowDimensions();
    const colorSheme = useColorScheme();

    return (
        <ScrollView
        style ={[Styles.container, colorSheme ==='light' ? {backgroundColor:'#fff'}: {backgroundColor:'#333333'}]}
        >
            
                <Image 
            style={Styles.logo}
            source={require("./logo.jpg")}
            resizeMode="contain"
            accessible={true}
            accessibilityLabel={"Logo"}
            />
            <Text style={Styles.title}> Little Lemon, your local Mediterranean Bistro {colorSheme}</Text>
            <Text style={Styles.title}>Window Dimenstions </Text>
            <Text style={Styles.title}>height:{window.height} </Text>
            <Text style={Styles.title}>width: {window.width} </Text>
            <Text style={Styles.title}>fontScale:{window.fontScale} </Text>


          
            
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex:1,
        padding:24,
        marginTop:25,


    },
    title: {
        marginTop:16,
        paddingVertical:10,
        color:'#333333',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    logo: {
        width:300,
        height:100,
    },
    img:{
        width:350,
        height:250,
        borderRadius:10,
    },
    backImg:{
        flex:1,
        justifyContent:'center'
    },
   
    })