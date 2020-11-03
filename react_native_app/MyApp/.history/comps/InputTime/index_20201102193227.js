import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const InputTime = ({time1, time2, time3, time4, time5, time6, time7, time8}) => {
  const [expanded, setExpanded] = useState(false);
  const onPress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <View style={styles.label}>
          <Image
            source={require('../../public/TimeIcon.png')}
            style={styles.timeIcon}
          />
          <Text style={styles.text}>Time</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={require('../../public/ArrowDown.png')}
            style={styles.arrow}
            onPress={() => {
              setExpanded(!expanded);
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.hourContainer} expanded={expanded}>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>{time1}</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>{time2}</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>{time3}</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>{time4}</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>{time5}</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>{time6}</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>{time7}</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={styles.time}>{time8}</Text>
        </View>
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

  timeContainer: {
    backgroundColor: "#FFFFFF",
    // display:"${props=>props.expanded ? "inline-flex" : "none"}",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // border:${props=>props.expanded ? "#2775C9" : "#D3D3D3"},
    borderColor: "#D3D3D3",
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
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
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    // border: "solid 3px #D3D3D3",
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
    elevation: 3

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
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1.5,
    alignSelf: "stretch"
  }
});

InputTime.defaultProps = {
  time1:"9:00am - 10:00am",
  time2:"10:00am - 11:00am",
  time3:"11:00am - 12:00pm",
  time4:"12:00am - 1:00pm",
  time5:"1:00am - 2:00pm",
  time6:"2:00am - 3:00pm",
  time7:"3:00am - 4:00pm",
  time8:"4:00am - 5:00pm"
}

export default InputTime;
