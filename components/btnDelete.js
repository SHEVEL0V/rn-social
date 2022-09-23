/** @format */

import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const BtnDelete = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: 70, height: 40, borderRadius: 20 }}
    >
      <AntDesign name="delete" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

export default BtnDelete;
