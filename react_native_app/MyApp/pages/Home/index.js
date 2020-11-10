import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import ButtonF from '../../comps/ButtonF';

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


const Home = ()=>{
    return(
        <View style={styles.homepage}>
            <Image source={require('./logo.png')} style={styles.logo} />
            <View style={styles.buttonContainer}>
                <ButtonF text="LOGIN" bgcolor="#FDB833" style={styles.homeButton} />
                <Text style={styles.or}>OR</Text>
                <ButtonF text="SIGN UP" bgcolor="#00AC64" style={styles.homeButton} />
                <Text style={styles.asGuest} >As Guest</Text>
            </View>
        </View>
    );
};

export default Home;