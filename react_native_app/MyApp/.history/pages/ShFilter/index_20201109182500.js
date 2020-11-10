import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';


import InputDate from '../../comps/InputDate';
import InputTime from '../../comps/InputTime';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';
import Outlined from '../../comps/Outlined';

const ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    // body: {
    //     position: "absolute",
    //     top: "14%",
    //     alignItems: 'center',
    // },
    // row: {
    //     flexDirection: "row",
    //     // alignItems: "center"
    //     justifyContent: "center"
    // },
    icon: {
        resizeMode: "contain",
        maxWidth: 25,
        maxHeight: 25,
        margin: 10
    },
    // scroll: {
    //     width: Dimensions.get('window').width,
    //     height: Dimensions.get('window').height
    // },
    cattle: {
        display: "flex",
        flexDirection: "row"
    }
});

const ShFilter = () => {
    return (
        <View style={styles.container}>
            <View style={{height:100}}>
                <ScrollView style={styles.scroll}>
                    <Header
                        text="Slaughterhouse"
                        bottomColor="#2775C9"
                    />
                    <View style={styles.body}>
                        <InputDate />
                        <InputTime />
                    </View>
                    <View style={styles.cattle}>
                        <Outlined text="Red Meat"></Outlined>
                        <Outlined text="Poultry"></Outlined>
                        <Outlined text="Pork"></Outlined>
                        <Outlined text="Sheep"></Outlined>
                    </View>
                </ScrollView>
            </View>
            <Navigation />
        </View>
    );
};

export default ShFilter;