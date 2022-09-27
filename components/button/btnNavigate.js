/** @format */

import { TouchableOpacity, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const BtnNavigate = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ marginRight: 10, flexDirection: "row" }}
    >
      <FontAwesome5 name="map-marker-alt" size={18} color="#BDBDBD" />
      <Text
        style={{
          marginLeft: 10,
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BtnNavigate;
