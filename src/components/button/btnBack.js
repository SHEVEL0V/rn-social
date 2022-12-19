/** @format */

import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const BtnBack = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BtnBack;

const styles = StyleSheet.create({
  btn: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    marginTop: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    backgroundColor: "#E8E8E8",
  },
});
