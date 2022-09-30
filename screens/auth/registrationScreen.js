/** @format */
import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import FormRegistration from "../../components/formRegistr";
import bgImage from "../../assets/PhotoBG.png";
import Container from "../../components/container";

const RegistrationScreen = ({ navigation }) => {
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
          <FormRegistration navigation={navigation} />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default RegistrationScreen;
