import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MyUnread = ({title,text}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.titletext}>
      {text}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C97064",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 3,
    borderColor: "#fff",
    maxWidth: 400,
    maxHeight: 101,
    justifyContent: "center",
    marginVertical: 8,
    marginTop: 100,
    marginHorizontal: 50,
    // padding: 20,
    opacity: 20,
   
  },
  title: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 100,
    marginLeft: 30
  },
  titletext: {
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginLeft: 15
  }
});
MyUnread.defaultProps = {
  text: "Default text",
  title: "Default",
};
export default MyUnread;
