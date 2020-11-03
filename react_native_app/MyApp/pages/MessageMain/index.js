import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MsgBox from '../../comps/MsgBox';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const MessageMain = () => {
    return (
        <View style={styles.container}>
            <Text>Header goes here</Text>
            <Text>Input goes here</Text>
            <MsgBox />
            <MsgBox
                imagePath={require('../../public/a2.png')}
                txt1="NewFarmer"
                txt2="I totally agree with you..."
            />
            <MsgBox
                imagePath={require('../../public/a3.png')}
                txt1="HandsomeMan"
                txt2="What's up? Long time no talk..."
            />
            <MsgBox
                imagePath={require('../../public/a4.png')}
                txt1="HappyFarmer"
                txt2="See you tomorrow!😎"
            />
            <Text>Footer menu goes here</Text>
        </View>
    );
};

export default MessageMain;