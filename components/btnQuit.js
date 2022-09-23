/** @format */

import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BtnQuit = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="exit-outline" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BtnQuit;
