import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';


import InputDate from '../../comps/InputDate';
import InputTime from '../../comps/InputTime';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';
import Outlined from '../../comps/Outlined';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    body: {
        position: "absolute",
        top: "14%",
        alignItems: 'center',
    },
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
    scroll: {
        maxHeight: "95%"
    },
    cattle: {
        display: "flex",
        flexDirection: "column"
    }
});

const ShFilter = () => {
    return (
        <View style={styles.container}>
            <Header
                text="Slaughterhouse"
                bottomColor="#2775C9"
            />
            <View style={{ height:"90%" }}>
                <ScrollView style={styles.scroll}>

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