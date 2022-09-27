/** @format */
import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import FormLogin from "../../components/formLogin";
import bgImage from "../../assets/PhotoBG.png";

const LoginScreen = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setIsFocus(false);
      }}
    >
      <ImageBackground
        style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
        source={bgImage}
      >
        <FormLogin
          navigation={navigation}
          setIsFocus={setIsFocus}
          isFocus={isFocus}
        />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
