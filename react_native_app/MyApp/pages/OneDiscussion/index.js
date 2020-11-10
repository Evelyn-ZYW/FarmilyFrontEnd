import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';


import DiscussionHeading from '../../comps/DiscussionHeading';
import PostBodyD from '../../comps/PostBodyD';
import Comment from '../../comps/Comment';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        // flex:1,
        position: "absolute",
        top: "14%",
        // alignItems: 'center',
        // borderWidth:3,
        maxHeight:"65%"
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
    }
});

const OneDiscussion = () => {
    return (
        <View style={styles.container}>
            <Header
                text="Discussion"
                iconRight={require('../../public/map.png')}
                iconLeft={require('../../public/back.png')}
                bottomColor="#2775C9"
            />
            <ScrollView style={styles.contentContainer}>
                <View>
                    <DiscussionHeading />
                    <PostBodyD />
                    <Comment />
                    <Comment followUp={require("../../public/follow_up.png")}/>
                    <Comment followUp={require("../../public/follow_up.png")}/>
                    <Comment followUp={require("../../public/follow_up.png")}/>
                </View>
            </ScrollView>

            <Navigation />
        </View>
    );
};

export default OneDiscussion;