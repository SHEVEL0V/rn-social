/** @format */
import AppLoading from "expo-app-loading";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  View,
} from "react-native";
import LoginScreen from "./screens/auth/loginScreen";

import RegistrationScreen from "./screens/auth/registrationScreen";

export default function App() {
  return (
    <>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </>
  );
}
