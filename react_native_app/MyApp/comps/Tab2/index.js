import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";

const MyTab2 = ({iconExpand, text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <Image source={iconExpand} style={styles.headIconE}/>
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
    borderTopColor:"#DADADA",
    borderBottomColor:"#DADADA",
    borderRightColor:"#fff",
    borderLeftColor:"#fff",
    // borderColor: "#2775C9",
    maxWidth: 335,
    maxHeight: 84,
    // justifyContent: "center",
    marginVertical: 8,
    marginTop: 100,
    marginHorizontal: 50,
    padding: 20,
    display:"flex",
    flexDirection:"row",
  },
  title: {
    fontFamily: "Josefin Sans",
    fontSize: 24,
    // style:"normal",
    justifyContent: "center",
    alignItems:"center",
    // marginHorizental: 100,
    marginLeft: 20,
   

  },
  headIconE: {
    position:"relative",
    left:105,
    marginVertical:5,
    maxHeight:30,
    maxWidth:30,
    resizeMode:"contain"
  }
  
});
MyTab2.defaultProps = {
  iconExpand:require("./expand_more.png"),
  text: "Default",
};
export default MyTab2;
