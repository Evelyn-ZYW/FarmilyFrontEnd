import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../comps/Button';

const styles = StyleSheet.create({
    homepage:{
        alignItems:"center",
        justifyContent:"center",
        paddingTop:150,
    },
    logo:{
        width:300,
        height:300
    },
    homeButton:{

    },
    or:{
        fontWeight:"bold",
        textAlign:"center",
        margin:15
    },
    asGuest:{
        color: "#2775C9",
        fontWeight:"bold",
        textAlign:"center",
        marginTop:50
    },
    buttonContainer:{
        width:210,
        marginTop:-20
    }
});


const Home = ({navigation})=>{
    const handleLogin = () =>{
        navigation.navigate("Login")
    }
    const handleSignup = () =>{
        navigation.navigate("Signup")
    }
    const handleMain = () =>{
        navigation.navigate("Main")
    }
    return(
        <View style={styles.homepage}>
            <Image source={require('./logo.png')} style={styles.logo} />
            <View style={styles.buttonContainer}>
                <Button text="LOGIN" bgcolor="#FDB833" style={styles.homeButton} handler={handleLogin} />
                <Text style={styles.or}>OR</Text>
                <Button text="SIGN UP" bgcolor="#00AC64" style={styles.homeButton} handler={handleSignup}/>
                <TouchableOpacity onPress={handleMain}>
                    <Text style={styles.asGuest} >As Guest</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;