/** @format */

import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const BtnCamera = ({ onPress, style }) => {
  return (
    <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPress}>
      <FontAwesome name="camera" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

export default BtnCamera;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFFFFF4D",
    height: 60,
    width: 60,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
});
