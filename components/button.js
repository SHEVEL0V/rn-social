/** @format */
import React from "react";
import {
  Platform,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  Text,
} from "react-native";

const Btn = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPress}>
      <Text style={{ ...styles.btnTitle, ...style }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

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
