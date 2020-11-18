import React from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image} from 'react-native';


// import DiscussionHeading from '../../comps/DiscussionHeading';
import Header from '../../comps/Header';
import UserTextInput from '../../comps/Inputs';
import ContInput from '../../comps/ContInput';
import Navigation from '../../comps/Navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    
    
    icon: {
        resizeMode: "contain",
        maxWidth: 25,
        maxHeight: 25,
        margin: 10
    },
    midcont:{
        marginTop:40,
        position: "absolute",
        top: "10%",
        alignItems: 'center',
        
        // maxHeight:"105%"
    },
    continput:{
        marginTop:80,
        borderColor:"#E5E5E5",
        borderWidth:1
    },
    userinput:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom:60,        
        borderBottomColor:"#E5E5E5",
        borderBottomWidth:1.5,
        minWidth: "100%",
        minHeight: "15%",
    },
    Navi:{
        position:"absolute",
        top:698
    },
});

const ShInfo = () => {
    return (
        <View style={styles.container}>
            <Header
                text="Discussion"
                iconRight={require('../../public/more.png')}
                iconLeft={require('../../public/back.png')}
                bottomColor="#00AC64"
            />
            {/* <ScrollView style={styles.contentContainer}> */}
                <View style={styles.midcont}>
                   <View style={styles.userinput}>
                        <UserTextInput
                        placeholder="Subject"
                        />
                        <Image
                            source={require('../../public/search.png')}
                            style={styles.icon}
                        />
                    </View>
                    <View style-={styles.continput} >

                    </View>
                    
                </View>
            {/* </ScrollView> */}

            <View style={styles.Navi}><Navigation /></View>
        </View>
    );
};

export default ShInfo;