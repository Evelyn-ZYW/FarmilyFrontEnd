import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const InputTime = () => {
  const [expanded, setExpanded] = useState(false);
  const onPress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <View style={styles.label}>
          <Image
            source={{ uri: "../../../TimeIcon.svg" }}
            style={styles.timeIcon}
          />
          <Text style={styles.text}>Time</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={{ uri: "../../../SimpleArrowDown.svg" }}
            style={styles.arrow}
            onPress={() => {
              setExpanded(!expanded);
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.hourContainer} expanded={expanded}>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>9:00am - 10:00am</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 85,
    marginBottom: 40,
    display: "flex",
    alignItems: "center"
  },

  timeContainer: {
    backgroundColor: "#FFFFFF",
    // display:"${props=>props.expanded ? "inline-flex" : "none"}",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 100,
    // border:${props=>props.expanded ? "#2775C9" : "#D3D3D3"},
    // border: "solid 3px #D3D3D3",
    borderRadius: 5,
    padding: 5,
    position: "relative",
    marginBottom: 10
  },

  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  text: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Roboto",
    padding: 5
  },

  timeIcon: {
    width: 20,
    height: 20,
    margin: 5
  },

  arrow: {
    width: 30,
    height: 30
  },

  hourContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 95,
    // border: "solid 3px #D3D3D3",
    borderRadius: 5,
    // boxShadow: "3px 3px 12px #D3D3D3"
  },

  time: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Roboto",
    margin: 12
  },

  timeBlock: {
    display: "flex",
    justifyContents: "center",
    alignItems: "center",
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 2,
    width: 100
  }
});

export default InputTime;
