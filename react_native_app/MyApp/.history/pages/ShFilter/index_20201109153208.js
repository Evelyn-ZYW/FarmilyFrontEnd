import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

import TradePost from '../../comps/TradePost';
import InputDate from '../../comps/InputDate';
import InputTime from '../../comps/InputTime';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    scroll: {
        flex: 1
    }
});

const ShFilter = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <Header
                    text="Slaughterhouse"
                    bottomColor="#2775C9"
                />
                <View style={styles.body}>
                    <InputDate />
                    <InputTime />
                </View>
            </ScrollView>


            <Navigation />
        </View>
    );
};

export default ShFilter;