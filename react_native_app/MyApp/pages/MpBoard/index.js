import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MarketHeading from '../../comps/MarketHeading';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const MpBoard = () => {
    return (
        <View style={styles.container}>
            <Text>Header goes here</Text>
            <Text>Input goes here</Text>
            <MarketHeading />
            <MarketHeading 
            imagePath={require('../../public/a1.png')}
            txt1="item 2 for sale"
            txt2="$300"
            txt3="its me again"
            />
            <MarketHeading 
            imagePath={require('../../public/a3.png')}
            txt1="item 3 for sale"
            txt2="$700"
            txt3="OMG"
            />
            <MarketHeading 
            imagePath={require('../../public/a4.png')}
            txt1="item 4 for sale"
            txt2="$1000"
            txt3="RichGuy"
            />
            <Text>Footer menu goes here</Text>
        </View>
    );
};

export default MpBoard;