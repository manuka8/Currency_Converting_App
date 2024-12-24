import { StyleSheet, View } from 'react-native'
import { Text,TextInput,Button} from 'react-native-paper';
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
                    mode="outlined" 
                    outlineColor="gray" 
                    activeOutlineColor="blue"
                    style={styles.input}
                    onChangeText={(value) => setText(value)}
                />
                <Button mode="outlined"  style={styles.button} onPress={() => console.log('Pressed')}>
                 Calculate
                </Button>
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
        borderRadius:20,
        padding:20,
    },
    header:{
        color:'green',
        fontSize:25,
        fontFamily:'sans-serif-light',
        fontWeight:'bold'
    },
    inputContainer: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        marginTop:40,
    },
    input:{
        width:'90%',
    },
    button:{
        color:'black',
        backgroundColor:'white',
        borderRadius:6,
        marginTop:30
    }
})


export default Home


