/** @format */
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({
  style,
  onFocus,
  autoComplete = "",
  isSecure,
  onChangeText,
  value,
  placeholder = "",
}) => {
  const [color, setColor] = useState("#E8E8E8");
  return (
    <TextInput
      style={{
        ...styles.input,
        ...style,
        borderColor: color,
      }}
      onBlur={() => setColor("#E8E8E8")}
      onFocus={() => {
        onFocus(true), setColor("#FF6C00");
      }}
      autoCompleteType={autoComplete}
      placeholder={placeholder}
      secureTextEntry={isSecure}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    color: "#212121",
  },
});
