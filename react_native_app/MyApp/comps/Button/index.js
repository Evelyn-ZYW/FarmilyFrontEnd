import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {

    borderRadius: 20,
    margin: 20,
    alignContent: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 5.5 },
    shadowOpacity: 0.7
  },
  buttontext: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10
  }
});

const Button = ({ bgcolor, text }) => {


  return (
    <TouchableOpacity > 
        <View style={styles.container} backgroundColor={bgcolor}>
          <Text style={styles.buttontext}>{text}</Text>
        </View>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  bgcolor: "#FDB833",
  text: "Default"
};

export default Button;
