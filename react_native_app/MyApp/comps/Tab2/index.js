// import React from "react";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity } from "react-native";

const MyTab2 = ({iconExpand, text,dropdown}) => {
  const [isdrop, setDrop] = useState(false);

  const hourCont = {display: isdrop ? "flex" : "none"}
  useEffect(()=>{
    setDrop(dropdown);
  }, [dropdown]);

  return (
    
    <View style={styles.container}>
<View style={styles.timeContainer}>
      <Text style={styles.title}>{text}</Text>
  
      <TouchableOpacity style={styles.hourCont} 
          onPress={()=>{
            setDrop(!isdrop);
          }}>
          <Image source={iconExpand} style={styles.headIconE}/>
        </TouchableOpacity>

        </View>

        <View isdrop={isdrop} style={[styles.hourContainer, hourCont]}>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>Test</Text>
        </View>
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff",
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
    width:400,
    maxHeight: 84,
    // justifyContent: "center",
    // marginVertical: 8,
    // marginTop: 100,
    marginHorizontal: 50,
    padding: 20,
    display:"flex",
    flexDirection:"row",
    alignContent:"space-between"
  },
  title: {
    fontFamily: "Josefin Sans",
    fontSize: 24,
    // style:"normal",
    alignItems: "flex-start",
    justifyContent: "center",
    // marginHorizental: 100,
    marginLeft: 20,
    fontWeight:"bold"
   

  },
  headIconE: {
    position:"relative",
    left:20,
    marginVertical:5,
    maxHeight:30,
    maxWidth:30,
    resizeMode:"contain"
  }
  
});
MyTab2.defaultProps = {
  iconExpand:require("./expand_more.png"),
  text: "Default",
  dropdown:()=>{}
};
export default MyTab2;
