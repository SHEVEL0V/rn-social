/** @format */

import { useEffect } from "react";
import { KeyboardAvoidingView, Keyboard } from "react-native";
import { useDispatch } from "react-redux";
import { isOpenKeyboard, isCloseKeyboard } from "../redux/optionals/slice";

const Container = ({ children, margin = false, addListener = false }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (addListener) {
      const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
        dispatch(isOpenKeyboard());
      });
      const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
        dispatch(isCloseKeyboard());
      });

      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }
  }, []);
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
