/** @format */

import { TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const BtnPost = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <Feather name="message-circle" size={24} color="#BDBDBD" />
      <Text style={{ marginLeft: 9, color: "#BDBDBD" }}>0</Text>
    </TouchableOpacity>
  );
};

export default BtnPost;
