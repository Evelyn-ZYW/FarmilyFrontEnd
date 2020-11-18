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
    borderBottomColor:"#E5E5E5",
    borderBottomWidth:1.5,
  }
});

MapCont.defaultProps = {
    width: 333,
    height: 333
};
export default MapCont;