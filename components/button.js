/** @format */
import React from "react";
import {
  Platform,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";

const Buttton = ({ title, bgColor, color }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: bgColor }}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Text style={{ ...styles.btnTitle, color: color }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttton;

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    // ...Platform.select({
    //   ios: { backgroundColor: "transparent", borderColor: "#fff" },
    //   android: { backgroundColor: "#4169e1", borderColor: "#transparent" },
    // }),
  },
  btnTitle: {
    fontSize: 16,
  },
});
