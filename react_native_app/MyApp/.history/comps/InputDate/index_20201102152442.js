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
          source={{ uri: "../../../SimpleArrowDown.png" }}
          style={styles.arrow}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: 40,
    alignSelf: "stretch",
  },

  dateContainer: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#D3D3D3",
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
    elevation: 3
  },

  text: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Roboto",
    padding: 1
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
