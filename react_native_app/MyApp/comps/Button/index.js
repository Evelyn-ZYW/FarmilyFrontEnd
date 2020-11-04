import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyButton = () => {
  return (
    <View style={styles.container}>
      <Text>Button to signup</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:"red"
  }
})
export default MyButton;
