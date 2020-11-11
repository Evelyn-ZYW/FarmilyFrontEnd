import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

const MyTab = ({iconView, text}) => {
  // const [bordercolor, setBdColor] = useState("#E5E5E5");

  //   const subject = { fontSize: fontsize ? fontsize : 22 };
  //   const bcolor = { borderColor: bordercolor ? bordercolor : "#E5E5E5" };
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>{text}</Text>
      <Image source={iconView} style={styles.headIconV}/>
      
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
    borderTopColor: "#DADADA",
    borderBottomColor: "#fff",
    borderRightColor: "#fff",
    borderLeftColor: "#fff",
    // borderColor: "#2775C9",
    maxWidth: "100%",
    maxHeight: 75,
    justifyContent: "center",
    // marginVertical: 8,
    // marginTop: 100,
    marginHorizontal: 40,
    padding: 13,
    display:"flex",
    flexDirection:"row",
    alignContent:"space-between"
  },
  title: {
    fontFamily: "Josefin Sans",
    fontSize: 27,
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 100,
    marginLeft: 10,
    fontWeight:"bold"

  },
  headIconV: {
    position:"relative",
    left:15,
    marginVertical:12,
    maxHeight:20,
    maxWidth:20,
    resizeMode:"contain"
  }
});
MyTab.defaultProps = {
  iconView:require("./iconfinder_right.png"),
  text: "Default",
};
export default MyTab;
