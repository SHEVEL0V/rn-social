/** @format */

import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const BtnDelete = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <AntDesign name="delete" size={16} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

export default BtnDelete;

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
