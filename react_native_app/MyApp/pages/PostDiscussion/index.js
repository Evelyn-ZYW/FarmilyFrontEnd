import React from 'react';
import { View, StyleSheet, ScrollView, TextInput,Text} from 'react-native';


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
        marginTop:20,
        position: "absolute",
        top: "15%",
        alignItems: 'center',
        
        // maxHeight:"105%"
    },
    continput:{
        marginTop:80,
    },
    userinput:{
        marginBottom:40,
    },
    Navi:{
        position:"absolute",
       bottom:0
    },
});

const PostDiscussion = () => {
    return (
        <View style={styles.container}>
            <Header
                text="Discussion"
                iconRight={require('../../public/msgsent.png')}
                iconLeft={require('../../public/back.png')}
                bottomColor="#FDB833"
            />
            {/* <ScrollView style={styles.contentContainer}> */}
                <View style={styles.midcont}>
                   <View style={styles.userinput}>
                    <UserTextInput
                    placeholder="Subject"
                    />
                    </View>
                    <View style-={styles.continput} >
                    <ContInput
                    placeholder="Input content here"
                    
                    />
                    </View>
                    
                </View>
            {/* </ScrollView> */}

            <View style={styles.Navi}><Navigation /></View>
        </View>
    );
};

export default PostDiscussion;