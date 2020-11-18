import React, { Component } from "react";
import {View, StyleSheet } from "react-native";

const MapCont = ({width, height}) => {

  return (
    <View style={styles.mapCont}
    width={width}
    height={height}
    >
    </View>

  );
};
const styles = StyleSheet.create({
  mapCont: {
    flex:1,
    borderColor:"#E5E5E5",
    borderWidth:1.5,
  }
});

MapCont.defaultProps = {
    width: 380,
    height: 380
};
export default MapCont;