import React from 'react';
import { View, Text, StyleSheet, Image, TextInput,ScrollView } from 'react-native';

// import MyPopUp from '../../comps/Popups';
import MyTab2 from '../../comps/Tab2';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    body: {
        // position: "absolute",
        // top: "1%",
        alignItems: 'center',
        
            //  maxHeight:"100%"
    },
    Navi:{
        position:"absolute",
        bottom:0
  
    },
    contentContainer: {
        // alignItems: 'center',
        position: "absolute",
        top: "13%",
        // maxHeight:"50%",
        // alignItems: 'center',
        // borderWidth:3,
        maxHeight:"90%"
    
},

});

const Favorite = ({navigation}) => {
    // const handle
    return (
        
        <View style={styles.container}>
            <Header 
            
                text="Favorite"

                // iconRight={require('../../public/pencil.png')}
                bottomColor="#C97064"
            />
            <ScrollView style={styles.contentContainer}>
            <View style={styles.body}>
            
                <MyTab2 
                text="Favorite Posts"
                />
                <MyTab2
                text="Favorite Items"
                />
                <MyTab2
                text="Favorite Slaughterhouses"
                />
    
            </View>
            </ScrollView>
            <View style={styles.Navi}><Navigation /></View>
        </View>

    );
};


export default Favorite;