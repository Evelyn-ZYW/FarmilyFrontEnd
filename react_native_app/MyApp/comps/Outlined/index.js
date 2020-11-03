import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    outerline:{
        borderRadius:10,
        borderWidth:3,
        borderColor:"#DADADA",
        alignItems: "center",
        margin:10
    },
    insidetext:{
        color:"#000000",
        width: 51,
        fontWeight: "bold",
        textAlign:"center",
        margin:10
    }
});

const Outlined = ({text}) => {
  return (
    <View style={styles.outerline}>
        <View>
  <Text style={styles.insidetext}>{text}</Text>
        </View>
    </View>
  );
};

Outlined.defaultProps = {
    text:"Default"
};

export default Outlined;