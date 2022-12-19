/** @format */
import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const BtnLike = () => {
  const [value, setValue] = useState(0);
  const onPress = () => setValue((pre) => pre + 1);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginRight: "auto",
        marginLeft: 27,
      }}
    >
      <AntDesign
        name="like2"
        size={24}
        color={value === 0 ? "#BDBDBD" : "#FF6C00"}
      />
      <Text
        style={{ marginLeft: 10, color: value === 0 ? "#BDBDBD" : "#212121" }}
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
};

export default BtnLike;
