import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../comps/Button';
import UserTextInput from '../../comps/Inputs';

const styles = StyleSheet.create({
    signuppage:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:30
    },
    logoV:{
        width:180,
        height:80
    },
    user:{
        width:130,
        height:130
    },
    userInput:{
    },
    signupB:{
        width:200
    },
    signupBack:{
        alignSelf:"center",
        color:"#2775C9",
        fontWeight:"bold",
        fontSize:15
    },
    userinfo:{
        marginTop:20,
        marginBottom:10
    }
    
});


const SignUp = ()=>{
    return(
        <View style={styles.signuppage}>
            <Image source={require('./logoV.png')} style={styles.logoV} />
            <Image //Will use Expo ImagePicker API here instead, just need guidance for this part...
                source={require('./user.png')} style={styles.user}/>
            
            <View style={styles.userinfo}>
                <UserTextInput placeholder="First Name" />
            </View>
            <View style={styles.userinfo}>
                <UserTextInput placeholder="Last Name" />
            </View>
            <View style={styles.userinfo}>
                <UserTextInput placeholder="Username" />
            </View>
            <View style={styles.userinfo}>
                <UserTextInput placeholder="Email Address" />
            </View>
            <View style={styles.userinfo}>
                <UserTextInput placeholder="Password" />
            </View>
            <View style={styles.userinfo}>
                <UserTextInput placeholder="Comfirm Password" />
            </View>

            <View style={styles.signupB}>
                <Button bgcolor="#00AC64" text="SIGN UP"/>
            </View>
            <TouchableOpacity>
                <Text style={styles.signupBack}>BACK</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignUp;