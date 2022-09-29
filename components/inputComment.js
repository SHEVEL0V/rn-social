/** @format */

import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import BtnAdd from "./button/btnAdd";

const InputComment = ({ setisActive, addComment }) => {
  const [color, setColor] = useState("#E8E8E8");
  const [value, setValue] = useState("");

  return (
    <View style={{ ...styles.input, borderColor: color }}>
      <TextInput
        placeholder="Комментировать..."
        value={value}
        onBlur={() => setColor("#E8E8E8")}
        onFocus={() => {
          setisActive(true), setColor("#FF6C00");
        }}
        onChangeText={(value) => setValue(value)}
      />
      <BtnAdd
        onPress={() => {
          addComment(value), setValue("");
        }}
      />
    </View>
  );
};

export default InputComment;

const styles = StyleSheet.create({
  postContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 8,
    height: 50,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
});
