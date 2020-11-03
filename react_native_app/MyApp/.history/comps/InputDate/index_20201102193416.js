import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const InputDate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <View style={styles.label}>
          <Image
            source={require('../../public/DateIcon.png')}
            style={styles.dateIcon}
          />
          <Text style={styles.text}>Date</Text>
        </View>
        <Image
          source={require('../../public/ArrowDown.png')}
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
    borderColor: "#D3D3D3",
    borderWidth: 2,
  },

  text: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 16,
    fontFamily: "Roboto",
    padding: 5
  },

  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  dateIcon: {
    width: 20,
    height: 20,
    margin: 5
  },

  arrow: {
    width: 30,
    height: 30
  },

  calendarContainer: {}
});

export default InputDate;
