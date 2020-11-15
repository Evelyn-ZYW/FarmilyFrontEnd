import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';


import InputDate from '../../comps/InputDate';
import InputLocation from '../../comps/InputTime';
import Header from '../../comps/Header';
import Navigation from '../../comps/Navigation';
import Outlined from '../../comps/Outlined';
import Button from '../../comps/Button';
import style from '../../storybook/stories/CenterView/style';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        resizeMode: "contain",
        maxWidth: 25,
        maxHeight: 25,
        margin: 10
    },
    scroll: {
        position: "absolute",
        maxHeight:"100%",
        width:"100%",
        marginTop: 100
    },
    button: {
        width:100,
        justifyContent: "center",
        alignSelf: "center",
        marginLeft: 100,
        marginRight: 100
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
    inputL: {
        width: 250,
        alignSelf: "center"
    },
    optionCont: {
        display:"flex",
        flexDirection:"row",
        justifyContent: "center"
    }
});

const ShFilter = () => {
    return (
        <View style={styles.container}>
            <View>
            <Header
                text="Slaughterhouse"
                bottomColor="#2775C9"
            />
            </View>
            <View style={{}}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.inputL}><InputLocation /></View>
                    <View style={styles.inputD}><InputDate /></View>

                    <View style={styles.optionCont}>
                        <View style={styles.filterOption}><Outlined text="Red Meat"></Outlined></View>
                        <View style={styles.filterOption}><Outlined text="Poultry"></Outlined></View>
                    </View>                    
                    <View style={styles.optionCont}>
                        <View style={styles.filterOption}><Outlined text="Pork"></Outlined></View>
                        <View style={styles.filterOption}><Outlined text="Sheep"></Outlined></View>
                    </View>

                    <View style={style.button}><Button text="Search"></Button></View>
                </ScrollView>
            </View>

            <View style={styles.Navi}><Navigation /></View>
        </View>
    );
};

export default ShFilter;