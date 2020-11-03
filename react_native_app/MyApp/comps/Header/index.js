import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    headerBox:{
        borderBottomColor:"#E5E5E5",
        borderBottomWidth:1.5,
    },
    innerHeadBox:{
        alignItems:"center",
        flexDirection:"row",
        margin:5,
        justifyContent:"center",

    },
    innerText:{
        borderBottomWidth:3,
        padding:10,
        marginBottom:13,
        justifyContent:"center",

    },
    headIconL:{
        position:"absolute",
        left:15

    },
    headText:{
        fontWeight:"bold",
        fontSize:24,

    },
    headIconR:{
        position:"absolute",
        right:15,
        minHeight:33,
        minWidth:35,
    }
});

const Header = ({iconLeft, text, iconRight, bottomColor}) => {
  return (
    <View style={styles.headerBox}>
        <View style={styles.innerHeadBox}>
            <Image source={iconLeft} style={styles.headIconL}/>
            <View style={styles.innerText} borderBottomColor={bottomColor}>
                <Text style={styles.headText}>{text}</Text>
            </View>
            <Image source={iconRight} style={styles.headIconR}/>
        </View>
    </View>
  );
};

Header.defaultProps = {
    iconLeft:require("./arrowleft.png"),
    text: "Default",
    iconRight:require("./send.png"),
    bottomColor: "#FDB833"
};

export default Header;