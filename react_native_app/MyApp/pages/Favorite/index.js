import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

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
        position: "absolute",
        top: "10%",
        alignItems: 'center',
    },
    
    
});

const Favorite = () => {
    return (
        
        <View style={styles.container}>
            <Header 
                text="Slaugterhouse"

                // iconRight={require('../../public/pencil.png')}
                bottomColor="#2775C9"
            />
            <View style={styles.body}>
                <MyTab2 text="Favorite Posts"
                />
                <MyTab2
                text="Favorite Items"
                />
                <MyTab2
                text="Favorite Slaughterhouses"
                />
            </View>
            <Navigation />
        </View>
    );
};


export default Favorite;