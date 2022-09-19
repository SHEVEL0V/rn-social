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
import bgImage from "../../assets/PhotoBG.png";
import Btn from "../../components/button";

const LoginScreen = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isSecure, setIsSecure] = useState(true);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setIsFocus(false);
      }}
    >
      <ImageBackground style={styles.image} source={bgImage}>
        <View
          style={{ ...styles.container, paddingBottom: isFocus ? 180 : 120 }}
        >
          <Text style={styles.title}>Войти</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onFocus={() => setIsFocus(true)}
              placeholder="Адрес электронной почты"
              autoComplete="email"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <View style={styles.containerPass}>
              <TextInput
                style={{ ...styles.input, marginBottom: 43 }}
                onFocus={() => setIsFocus(true)}
                placeholder="Пароль"
                secureTextEntry={isSecure}
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
              <Btn
                onPress={() => setIsSecure(!isSecure)}
                title={isSecure ? "Показать" : "Скрыть"}
                style={{
                  color: "#1B4371",
                  position: "absolute",
                  right: 12,
                  top: 8,
                }}
              />
            </View>
            <Btn
              title={"Зарегистрироваться"}
              style={{ color: "#FFFFFF", backgroundColor: "#FF6C00" }}
            />
            <Btn
              title={"Нет аккаунта? Зарегистрироваться"}
              style={{ color: "#1B4371" }}
            />
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
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
  containerPass: {
    position: "reletave",
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
