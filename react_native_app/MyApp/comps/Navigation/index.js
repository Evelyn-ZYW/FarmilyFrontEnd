import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";




const styles = StyleSheet.create({
  naviBox: {
    position: "absolute",
    bottom: 10,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderTopWidth: 1.5,
    borderTopColor: "#E5E5E5",
    minWidth: "100%"

  },
  icons: {
    width: 35,
    marginTop: "2%",
    resizeMode: "contain",
  }
});

const Navigation = ({ }) => {
  return (
    <View style={styles.naviBox}>
      <Image source={require('../../public/home.png')} style={styles.icons} />
      <Image source={require('../../public/notification.png')} style={styles.icons} />
      <Image source={require('../../public/profile.png')} style={styles.icons} />
      <Image source={require('../../public/heart.png')} style={styles.icons} />
      <Image source={require('../../public/chat.png')} style={styles.icons} />
    </View>
  );
};

Navigation.defaultProps = {

};

export default Navigation;