import { StyleSheet, View } from 'react-native'
import { Text,TextInput} from 'react-native-paper';
import React from 'react'
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
                label="Enter LKR value"
                value={Number}
                ode="outlined" 
                outlineColor="gray" 
                activeOutlineColor="blue"
                style={styles.input}
                onChangeText={(value) => setText(value)}
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
        fontFamily:'sans-serif-light',
        fontWeight:'bold'
    },
    inputContainer:{
        margin:10,
        paddingBlockStart:50,
        width:'100%',
        height:60,
        padding:0,
        margin:0,
        alignItems:'center',
        
    },
    input:{
        width:'90%',
    }
    
})


export default Home


