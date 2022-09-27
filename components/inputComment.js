/** @format */

import { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import BtnAdd from "./button/btnAdd";

const InputComment = ({ addComment }) => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.input}>
      <TextInput
        placeholder="Комментировать..."
        value={value}
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
    justifyContent: "space-between",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 8,
    height: 50,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 100,
  },
});
