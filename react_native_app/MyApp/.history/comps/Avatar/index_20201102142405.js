import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://www.worldfuturecouncil.org/wp-content/uploads/2020/02/dummy-profile-pic-300x300-1.png"
        }}
        style={styles.profilePic}
      />
      <Text style={styles.text}>Hello, [USERNAME]!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    position: "relative"
  },

  text: {
    color: "#000000",
    fontSize: 22,
    fontFamily: "Josefin Sans",
    fontWeight: "400"
  },

  profilePic: {
    display: "flex",
    borderRadius: 120,
    width: 120,
    height: 120,
    marginBottom: 30
  }
});

export default Avatar;
