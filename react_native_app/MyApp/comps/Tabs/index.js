import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MyTab = ({iconView, text}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>{text}</Text>
      <Image source={iconView} style={styles.headIconV}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    borderWidth: 1,
    borderTopColor: "#DADADA",
    borderBottomColor: "#DADADA",
    borderRightColor: "#fff",
    borderLeftColor: "#fff",
    // borderColor: "#2775C9",
    maxWidth: 335,
    maxHeight: 84,
    justifyContent: "center",
    marginVertical: 8,
    marginTop: 100,
    marginHorizontal: 40,
    padding: 20,
    display:"flex",
    flexDirection:"row",
    alignContent:"space-between"
  },
  title: {
    fontFamily: "Josefin Sans",
    fontSize: 27,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 100,
    marginLeft: 20
  },
  headIconV: {
    position:"relative",
    left:5,
    marginVertical:5,
    maxHeight:30,
    maxWidth:30,
    resizeMode:"contain"
  }
});
MyTab.defaultProps = {
  iconView:require("./iconfinder_right.png"),
  text: "Default",
};
export default MyTab;