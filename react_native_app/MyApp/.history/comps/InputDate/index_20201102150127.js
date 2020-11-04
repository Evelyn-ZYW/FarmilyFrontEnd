import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const InputDate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <View style={styles.label}>
          <Image
            source={{ uri: "../../../DateIcon.svg" }}
            style={styles.dateIcon}
          />
          <Text style={styles.text}>Date</Text>
        </View>
        <Image
          source={{ uri: "../../../SimpleArrowDown.svg" }}
          style={styles.arrow}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "stretch",
    margin: 40,
  },

  dateContainer: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    borderColor: "#D3D3D3",
    borderRadius: 8,
    padding: 5,
    
    position: "relative"
  },

  text: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Roboto",
    padding: 2
  },

  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  dateIcon: {
    width: 20,
    height: 20,
    margin: 20
  },

  arrow: {
    width: 30,
    height: 30
  },

  calendarContainer: {}
});

export default InputDate;
