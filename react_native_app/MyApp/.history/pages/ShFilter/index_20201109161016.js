import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

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
        width: 200,
        height:200
    }
});

const ShFilter = () => {
    return (
        <ScrollView>
        <View style={styles.container}>
                <Header
                    text="Slaughterhouse"
                    bottomColor="#2775C9"
                />
                <View style={styles.body}>
                    <InputDate />
                    <InputTime />
                </View>


            <Navigation />
        </View>
        </ScrollView>
    );
};

export default ShFilter;