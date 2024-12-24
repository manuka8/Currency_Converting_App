import React, { Component } from 'react'
import { StyleSheet,Text, View } from 'react-native'
import { TextInput} from 'react-native-paper';

export function Home(){
    const [text, setText] = React.useState("");

    return (
        <>
        <View style={styles.mainContainer}>
            <View>
                <Text varient="headlineLarge" style={styles.header}>Currency Converter</Text>
                </View>
                <View style={styles.inputContainer}>
            <TextInput
                label="Email"
                value={text}
                style={styles.input}
                
            />
            </View>
        </View>
        
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        fontSize:15,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'flex-start',
        width:'100%',
        height:800,
        borderRadius:20,
        padding:20,
    },
    header:{
        color:'green',
        fontSize:25,
    },
    inputContainer:{
        margin:10,
        paddingBlockStart:20,
        width:'100%',
        height:60,
        padding:0,
        margin:0,
        alignItems:'center',
        
    },
    
    
})


export default Home


