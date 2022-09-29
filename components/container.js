/** @format */

import { StyleSheet, View, KeyboardAvoidingView } from "react-native";

const Container = ({ children, margin = false }) => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        marginHorizontal: margin && 16,
        marginTop: margin && 32,
        marginBottom: margin && 16,
      }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {},
});
