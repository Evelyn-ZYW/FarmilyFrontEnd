import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Gallery = () => {
  return (
    <View style={styles.container}>
      {/* Will use a react native open source image gallery here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    padding: 18
  }

  // arrowLeft: {
  //   width: 30,
  //   height: 30
  // },

  // arrowRight: {
  //   width: 30,
  //   height: 30
  // }
});

export default Gallery;
