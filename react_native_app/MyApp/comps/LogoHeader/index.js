import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  headerBox: {
    position: "absolute",
    top: "0%",
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 1.5,
    minWidth: "100%",
    maxHeight: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    resizeMode: "contain",
    maxWidth: "65%",
    bottom: "-15%"
  }
});

const LogoHeader = ({ logo, handler }) => {
  return (
    <TouchableOpacity style={styles.headerBox} onPress={handler}>
        <Image source={logo} style={styles.logo} />
    </TouchableOpacity>

  );
};

LogoHeader.defaultProps = {
  onPress: () => { }
};

export default LogoHeader;