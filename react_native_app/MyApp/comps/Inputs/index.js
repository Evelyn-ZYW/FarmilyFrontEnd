import React, { Component } from "react";
import { TextInput, StyleSheet,Text } from "react-native";

const UserTextInput = ({text}) => {
  const [value, onChangeText] = React.useState("username");

  return (
   
    <TextInput
      style={{
        height: 40,
        width: 272,
        borderColor: "gray",
        borderWidth: 1,
        marginLeft: 20,
        marginTop: 50
      }}
      onChangeText={(text) => onChangeText(text)}
      
      value={value}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:"#797",
    flex:1,
  }
});
UserTextInput.defaultProps = {
  text: "yes",
};
export default UserTextInput;
