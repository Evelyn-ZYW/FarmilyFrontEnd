import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';


import InputDate from '../../comps/InputDate';
import InputTime from '../../comps/InputTime';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';
import Outlined from '../../comps/Outlined';
import Button from '../../comps/Button';
import style from '../../storybook/stories/CenterView/style';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        resizeMode: "contain",
        maxWidth: 25,
        maxHeight: 25,
        margin: 10
    },
    scroll: {
        maxHeight: "100%"
    },
    button: {
        width:212,
        justifyContent: "center",
        alignSelf: "center"
    },
    Navi:{
        position:"absolute",
        top:698
    },
    filterOption: {
        margin:20,
        width:100
    },
    inputD: {
        width: 250,
        alignSelf: "center"
    },
    inputT: {
        width: 250,
        alignSelf: "center"
    },
    optionCont: {
        display:"flex",
        flexDirection:"row"
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
                    <View style={styles.inputD}><InputDate /></View>
                    <View style={styles.inputT}><InputDate /></View>

                    <View style={styles.optionCont}>
                        <View style={styles.filterOption}><Outlined text="Red Meat"></Outlined></View>
                        <View style={styles.filterOption}><Outlined text="Poultry"></Outlined></View>
                    </View>
                    
                    <View style={styles.optionCont}>
                        <View style={styles.filterOption}><Outlined text="Pork"></Outlined></View>
                        <View style={styles.filterOption}><Outlined text="Sheep"></Outlined></View>
                    </View>

                    <View style={style.button}><Button></Button></View>
                </ScrollView>
            </View>

            <View style={styles.Navi}><Navigation /></View>
        </View>
    );
};

export default ShFilter;