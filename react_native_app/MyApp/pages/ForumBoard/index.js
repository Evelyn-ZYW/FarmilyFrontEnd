import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ForumPost from '../../comps/ForumPost';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const ForumBoard = () => {
    return (
        <View style={styles.container}>
            <Text>Header goes here</Text>
            <Text>Input goes here</Text>
            <ForumPost />
            <ForumPost
                imagePath={require('../../public/sh2.png')}
                txt1="OMG"
                txt2="WOW"
            />
            <ForumPost
                imagePath={require('../../public/sh3.png')}
                txt1="Ok Alright"
                txt2="dont stop the dancing"
            />
            <ForumPost
                imagePath={require('../../public/sh4.png')}
                txt1="One more time"
                txt2="We gonna celebrate"
            />
            <Text>Footer menu goes here</Text>
        </View>
    );
};

export default ForumBoard;