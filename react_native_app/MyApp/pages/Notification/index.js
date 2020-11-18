import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, TextInput,ScrollView } from 'react-native';

import MyUnread from '../../comps/Unread';
import Read from '../../comps/Read';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    Cont:{
        position: "absolute",
        maxHeight:"85%",
        // width:"100%",
        top: "15%",
       
    },
    body: {
        // position: "absolute",
        // maxHeight:"50%",
        // bottom:,
        // top: "15%",
        alignItems: 'center',
    },
    title: {
       fontWeight:"bold",
       fontSize:25,
       right:"30%"
    },
    unreadmsg:{
        opacity:0.6

    },
    Navi:{
        position:"absolute",
        bottom:0

    },
    
});

const Notification = () => {
    return (
        <View style={styles.container}>
            <Header 
                text="Notification"
                iconLeft={require('../../public/back.png')}
                bottomColor="#C97064"
            />
            <ScrollView style={styles.Cont}>
            <View style={styles.body}>
            <Text style={styles.title}>Unread</Text>
            <View style={styles.unreadmsg}>
                <MyUnread
                 title="When is this term over?"
                 text="aaaaaahhhhhhhhhhhhhh
                 hhhhhhhhhhhhhhhhhhhhhhhhhhhh"
                />
                <MyUnread
                 title="I don't care"
                 text="aaaaaahhhhhhhhhhhhhh
                 hhhhhhhhhhhhhhhhhhhhhhhhhhhh"
                />
                </View>
                  <Text style={styles.title}>Read</Text>
                  <View style={styles.unreadmsg}>
                <Read
                 title="When is this term over?"
                 text="aaaaaahhhhhhhhhhhhhh
                 hhhhhhhhhhhhhhhhhhhhhhhhhhhh"
                />
                <Read
                 title="I don't care"
                 text="aaaaaahhhhhhhhhhhhhh
                 hhhhhhhhhhhhhhhhhhhhhhhhhhhh"
                />
                <Read
                 title="I don't care"
                 text="aaaaaahhhhhhhhhhhhhh
                 hhhhhhhhhhhhhhhhhhhhhhhhhhhh"
                />
                
                </View>
                
               
            </View>
            </ScrollView>
            <View style={styles.Navi}><Navigation /></View>
            </View>
 
    );
};


export default Notification;