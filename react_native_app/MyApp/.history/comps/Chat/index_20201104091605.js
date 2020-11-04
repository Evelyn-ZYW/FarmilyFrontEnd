import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ChatBubble = (incomingMsg) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {incomingMsg}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#C97064",
    display: "flex",
    justifyContent: "flex-end",
    width: 150,
    borderRadius: 20,
    padding: 18,
    margin: 10
  },

  text: {
    color: "#FFFFFF",
    fontWeight: "300",
    fontSize: 17,
    fontFamily: "Roboto"
  }
});

ChatBubble.defaultProps = {
  incomingMsg: "Hi! My name is Tig and I'm co-owner of SimplySeasonals in Abbottsford. I saw your post, that you're selling your John Deere Tractor. I'm interested in buying it from you!"
}

export default ChatBubble;
