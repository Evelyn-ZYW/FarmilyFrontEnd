import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import ForumPost from '../../comps/ForumPost';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';
import UserTextInput from '../../comps/Inputs';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    body: {
        position: "absolute",
        top: "14%",
        alignItems: 'center',
    },
    row: {
        flexDirection: "row",
        // alignItems: "center"
        justifyContent: "center"
    },
    icon: {
        resizeMode: "contain",
        maxWidth: 25,
        maxHeight: 25,
        margin: 10
    },
    Forum_Navi: {
        position: "absolute",
        bottom: 0
    },
    userinput: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
        borderBottomColor: "#E5E5E5",
        borderBottomWidth: 1.5,
        minWidth: "100%",
        minHeight: "12%",
    },
});

const ForumBoard = ({ navigation }) => {
    const handleDpost = () => {
        navigation.navigate("OneDiscussion")
    }
    return (
        <View style={styles.container}>
            <Header
                text="Discussion"
                iconRight={require('../../public/pencil.png')}
                iconLeft={require('../../public/filter.png')}
                bottomColor="#FDB833"
            />
            <View style={styles.body}>
                {/* this input is for testing pages only -- start */}
                {/* <View style={styles.row}>
                    <TextInput
                        style={{ height: 40, width: "60%", borderColor: 'gray', borderWidth: 1, marginBottom: "6%", borderRadius: 5, textAlign: "center" }}
                    >For testing, will fix later</TextInput>
                    <Image
                        source={require('../../public/search.png')}
                        style={styles.icon}
                    ></Image>
                </View> */}
                {/* this input is for testing pages only -- end */}
                <View style={styles.userinput}>
                    <UserTextInput
                        placeholder="Search"
                    />
                    <Image
                        source={require('../../public/search.png')}
                        style={styles.icon}
                    />
                </View>
                <TouchableOpacity onPress={handleDpost}>
                    <ForumPost />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDpost}>
                    <ForumPost
                        imagePath={require('../../public/sh2.png')}
                        txt1="OMG"
                        txt2="WOW"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDpost}>
                    <ForumPost
                        imagePath={require('../../public/sh3.png')}
                        txt1="Ok Alright"
                        txt2="dont stop the dancing"
                    />
                </TouchableOpacity>


                {/* <ForumPost
                    imagePath={require('../../public/sh4.png')}
                    txt1="One more time"
                    txt2="We gonna celebrate"
                /> */}
            </View>
            <View style={styles.Forum_Navi}><Navigation /></View>
        </View>
    );
};

export default ForumBoard;