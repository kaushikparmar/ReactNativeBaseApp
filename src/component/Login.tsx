import React, { useState, useContext, useEffect } from 'react'
import { View, SafeAreaView, Button,Text, Alert, StyleSheet, Keyboard, TouchableOpacity } from 'react-native'
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { observer  } from "mobx-react-lite";
import { Contex } from "../App";
import { RootStoreApp } from '../stores/RootStore';
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex: 1,
        paddingTop: "80%"
    },
    input: {
        margin: 15,
        height: 40,
        width: "80%",
        borderColor: '#7a42f4',
        borderWidth: 1,
        textAlign: 'center',
    },
    bgColor: {
        color: "red"
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        width: "80%",
        textAlign: 'center'
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center'
    },
    text: {
        color: "#000",
        marginBottom: 40,
        fontSize: 40
    }
})


const Login = observer( () =>{

    console.log('---in login')
    const [userName, setUserName] = useState('')
    const rootStore = useContext(Contex)
    
    
    const submitHandle = () => {
        if(userName){
            rootStore.authStore.setName(userName)
            Alert.alert(rootStore.authStore.name)
        }
    }
    console.log(rootStore.authStore.name);
    return (
        
            <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(value) => { setUserName(value)}}
                placeholder="Name"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
            />
           
          
            <TouchableOpacity
                style={styles.submitButton}
                 onPress={submitHandle} >
                <Text style={styles.submitButtonText} > Submit </Text>
            </TouchableOpacity> 
          
        </View>       
         
    )
})
export default Login
