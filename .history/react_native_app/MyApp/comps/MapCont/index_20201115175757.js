import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

const MapCont = ({width, height}) => {
  const [value, onChangeText] = React.useState({text});

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
    backgroundColor:"#797",
    flex:1,
  }
});

MapCont.defaultProps = {
    width: 333,
    height: 333
};
export default MapCont;