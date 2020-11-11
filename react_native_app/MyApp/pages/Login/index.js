import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../comps/Button';
import UserTextInput from '../../comps/Inputs';

const styles = StyleSheet.create({
    loginpage:{
        alignItems:"center",
        justifyContent:"center",
        paddingTop:150,
    },
    logo:{
        width:300,
        height:300
    },
    forgetP:{
        color:"#2775C9",
        fontWeight:"bold",
        fontSize:12,
        alignSelf:"flex-end",
        marginTop:-20
    },
    loginInput:{
        marginTop:-15,
    },
    loginB:{
        width:212,
        marginTop:40
    },
    loginBack:{
        marginTop:30,
        alignSelf:"center",
        color:"#2775C9",
        fontWeight:"bold",
        fontSize:15
    }
});


const Login = ()=>{
    return(
        <View style={styles.loginpage}>
            <Image source={require('./logo.png')} style={styles.logo} />
            <View style={styles.loginInput}>
                    <UserTextInput placeholder="Username or Email Address"/>
                    <UserTextInput placeholder="Password"/>
                <TouchableOpacity>
                    <Text style={styles.forgetP}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.loginB}>
                <Button style={styles.loginButton} text="LOGIN"/>
                <TouchableOpacity>
                    <Text style={styles.loginBack}>BACK</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
};

export default Login;