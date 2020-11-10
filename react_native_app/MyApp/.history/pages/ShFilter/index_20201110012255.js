import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';


import InputDate from '../../comps/InputDate';
import InputTime from '../../comps/InputTime';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';
import Outlined from '../../comps/Outlined';
import ButtonF from '../../comps/ButtonF';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    body: {
        alignItems: 'center',
        margin: 40
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
        maxHeight: "100%"
    },
    cattle: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginLeft: 40,
        marginRight: 40
    }
});

const ShFilter = () => {
    return (
        <View style={styles.container}>
            <Header
                text="Slaughterhouse"
                bottomColor="#2775C9"
            />
            <View style={{ height:500 }}>
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
                    <ButtonF style={styles.button}></ButtonF>
                </ScrollView>
            </View>
            <Navigation />
        </View>
    );
};

export default ShFilter;