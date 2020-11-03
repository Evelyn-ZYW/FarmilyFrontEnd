import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import style from '../../storybook/stories/CenterView/style';

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        // borderColor: "#E5E5E5",
        maxWidth: "100%",
        maxHeight: 150,
        padding: 15,
    },

    row: {
        flexDirection: "row",
    },
    subheading: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    texts: {
        maxWidth: "65%",
    },
    photo: {
        maxWidth: "30%",
        maxHeight: 80,
        marginRight: "2%"
    },
    actions: {
        flexDirection: "row",
        marginTop: 20,
    },

    icon: {
        maxWidth: 20,
        maxHeight: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    smtxt: {
        marginLeft: 5,
        marginRight: 5,
    },
    brcorner1: {
        // borderWidth:1,
        maxWidth: "50%",
        flexDirection: "row",
    },
    brcorner2: {
        minWidth: "35%",
        flexDirection: "row",
        justifyContent: "flex-end",
    }
})

const TradePost = ({ txt1, txt2, txt3, txt4, txt5, fontsize }) => {

    const [bordercolor, setBdColor] = useState("#E5E5E5");

    const subject = { fontSize: fontsize ? fontsize : 19 };
    const bcolor = { borderColor: bordercolor ? bordercolor : "#E5E5E5" };

    return <View style={[styles.container, styles.cont, bcolor]}
        onTouchStart={() => { setBdColor("#00AC64"); }}
        onTouchEnd={() => { setBdColor("#E5E5E5"); }}
    >
        <View style={styles.row}>
            <Image
                style={styles.photo}
                source={require('../../public/tractor.png')}
            />
            <View style={styles.texts}>
                <View style={styles.subheading}>
                    <Text
                        style={[styles.cont, subject]}
                    >{txt1}</Text>
                    <Text
                        style={[styles.cont, subject]}
                    >{txt2}</Text>
                </View>
                <Text>{txt3}</Text>
            </View>
        </View>

        <View style={styles.actions}>
            <View style={styles.brcorner1}>
                <Image
                    style={styles.icon}
                    source={require('../../public/heart.png')}
                />
                <Text
                    style={styles.smtxt}
                >{txt4}</Text>
                <Image
                    style={styles.icon}
                    source={require('../../public/eye.png')}
                />
                <Text
                    style={styles.smtxt}
                >{txt5}</Text>
            </View>
            <View style={styles.brcorner2}>
                <Image
                    style={styles.icon}
                    source={require('../../public/share.png')}
                />
                <Image
                    style={styles.icon}
                    source={require('../../public/more.png')}
                />
            </View>
        </View>
    </View>
}

TradePost.defaultProps = {
    txt1: 'Tractor for sale',
    txt2: "$1000",
    txt3: 'Bought bigger one for more grains... 5 years, perfect condition, $500, message for more details...',
    txt4: '25',
    txt5: '79'
}
export default TradePost;