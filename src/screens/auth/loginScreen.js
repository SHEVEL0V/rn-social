/** @format */
import React from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import FormLogin from "../../components/formLogin";
import bgImage from "../../assets/PhotoBG.png";
import Container from "../../components/container";

const LoginScreen = ({ navigation }) => {
  return (
    <Container addListener={true}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ImageBackground
          style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
          source={bgImage}
        >
          <FormLogin navigation={navigation} />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default LoginScreen;
