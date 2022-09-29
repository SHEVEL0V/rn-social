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
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Container>
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
          <FormRegistration
            navigation={navigation}
            setIsFocus={setIsFocus}
            isFocus={isFocus}
          />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default RegistrationScreen;
