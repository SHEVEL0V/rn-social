/** @format */

import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const BtnAdd = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 34,
        height: 34,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundColor: "#FF6C00",
      }}
    >
      <AntDesign name="arrowup" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

export default BtnAdd;
