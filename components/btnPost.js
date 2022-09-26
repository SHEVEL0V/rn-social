/** @format */

import { TouchableOpacity, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const BtnPost = ({ onPress, qty }) => {
  
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <Feather
        name="message-circle"
        size={24}
        color={qty === 0 ? "#BDBDBD" : "#FF6C00"}
      />
      <Text style={{ marginLeft: 9, color: qty === 0 ? "#BDBDBD" : "#212121" }}>
        {qty}
      </Text>
    </TouchableOpacity>
  );
};

export default BtnPost;
