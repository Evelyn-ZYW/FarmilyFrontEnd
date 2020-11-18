import React from 'react';
import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native';


import LogoHeader from '../../comps/LogoHeader/index';
import Navigation from '../../comps/Navigation/';
import MyTab from '../../comps/Tabs/index';
import Avatar from '../../comps/Avatar/index 2';
// import UserTextInput from '../../comps/Inputs';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    body: {
        position: "absolute",
        top: "15%",
        // alignItems: 'center',
    },
    
    logoheader:{
        top:"10%",

    },


    tabs:{
        alignItems:"flex-start",
    }, 
    Navi:{
        position:"absolute",
      bottom:0
    },

});

const Profile = ({navigation}) => {
    const handleMydis = () =>{
        navigation.navigate("OneDiscussion")
    }
    const handleMyMarket = () =>{
        navigation.navigate("OneMarket")
    }
    return (
        <View style={styles.container}>
           <LogoHeader
           style={styles.logoheader}
                logo={require("../../public/logo_h.png")}
            />
            <View style={styles.body}>
           
            <View style={styles.avatar}>
            <Avatar/>
            </View>
            <View style={styles.tabs}>
         
                <MyTab
                text="View Profile"
                />
         
                <TouchableOpacity onPress={handleMydis}>
                <MyTab
                 text="My discussion"
                />        
                 </TouchableOpacity>

                 <TouchableOpacity onPress={handleMyMarket}>
                <MyTab
                text="My Market"
                />
                 </TouchableOpacity>
                <MyTab
                text="Settings"
                />
                <MyTab
                 text="Logout"
                />
                </View>
            
            </View>
            <View style={styles.Navi}><Navigation /></View>
        </View>
    );
};

export default Profile;
