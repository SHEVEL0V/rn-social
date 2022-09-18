/** @format */
import AppLoading from "expo-app-loading";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  View,
} from "react-native";

import RegistrationScreen from "./screens/registrationScreen";

export default function App() {
  return (
    <>
      <RegistrationScreen />
    </>
  );
}
