import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';


import LogoHeader from '../../comps/LogoHeader';
import Navigation from '../../comps/Navigation';
import MyTab from '../../comps/Tabs';
import Avatar from '../../comps/Avatar';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    body: {
        position: "absolute",
        top: "10%",
        alignItems: 'center',
    },
    row: {
        flexDirection: "row",
        // alignItems: "center"
        justifyContent: "center"
    },
    avater:{
    
      maxHeight:100,
      maxWidth:100,


    },
    logoheader:{
        marginBottom:100,

    },
    tabs:{
      maxHeight:10,
      marginBottom:100,
    
    }
  
});

const Profile = () => {
    return (
        
        <View style={styles.container}>
           <LogoHeader
           style={styles.logoheader}
                logo={require("../../public/logo_h.png")}
            />
            <View style={styles.body}>
            <Avatar/>
            <View style={styles.tabs}>
                <MyTab/>
                <MyTab/>        
                <MyTab/>
                <MyTab/>
                <MyTab/>

                </View>
                
     
                {/* this input is for testing pages only -- end */}
                 

                
                {/* <ForumPost
                    imagePath={require('../../public/sh4.png')}
                    txt1="One more time"
                    txt2="We gonna celebrate"
                /> */}
            </View>
            <Navigation />
        </View>
    );
};

export default Profile;