import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    headerBox:{
        position: "absolute",
        top: 0,
        borderBottomColor:"#E5E5E5",
        borderBottomWidth:1.5,
        minWidth: "100%",

    },
    innerHeadBox:{
        // borderWidth: 1,
        alignItems:"center",
        flexDirection:"row",
        margin:5,
        justifyContent:"space-between",

    },
    innerText:{
        borderBottomWidth:3,
        padding:10,
        marginBottom:13,
        justifyContent:"center",

    },
    headIconL:{
        position:"relative",
        left:15,
        maxHeight:35,
        maxWidth:35,
        resizeMode:"contain"
    },
    headText:{
        fontWeight:"bold",
        fontSize:24,

    },
    headIconR:{
        position:"relative",
        right:15,
        maxHeight:35,
        maxWidth:35,
        resizeMode:"contain"
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