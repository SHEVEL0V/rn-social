/** @format */
import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Text,
  View,
  TextInput,
} from "react-native";
import bgImage from "../assets/PhotoBG.png";
import Avatar from "../components/avatar";
import Buttton from "../components/button";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setIsFocus(false);
      }}
    >
      <ImageBackground style={styles.image} source={bgImage}>
        <View
          style={{ ...styles.container, paddingBottom: isFocus ? 200 : 60 }}
        >
          <Avatar />
          <Text style={styles.title}>Регистрация</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onFocus={() => setIsFocus(true)}
              placeholder="Логин"
              textAlign={"center"}
              value={login}
              onChangeText={(value) => setLogin(value)}
            />
            <TextInput
              style={styles.input}
              onFocus={() => setIsFocus(true)}
              placeholder="Адрес электронной почты"
              textAlign={"center"}
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <TextInput
              style={{ ...styles.input, marginBottom: 43 }}
              onFocus={() => setIsFocus(true)}
              placeholder="Пароль"
              textAlign={"center"}
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            <Buttton
              title={"Зарегистрироваться"}
              bgColor={"#FF6C00"}
              color={"#FFFFFF"}
            />
            <Buttton title={"Уже есть аккаунт? Войти"} color={"#1B4371"} />
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    marginTop: 32,
    marginBottom: 33,
    fontSize: 30,
    textAlign: "center",
    color: "#212121",
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    fontSize: 16,
    color: "#212121",
  },
});
