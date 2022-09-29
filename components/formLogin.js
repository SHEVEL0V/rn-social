/** @format */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInUser } from "../redux/auth/operations";
import { StyleSheet, Text, View } from "react-native";
import Btn from "./button/button";
import Input from "./input";

const FormLogin = ({ navigation, setIsFocus, isFocus }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSecure, setIsSecure] = useState(true);
  const dispatch = useDispatch();

  const login = () => {
    if ((email !== "", password !== "")) {
      dispatch(signInUser({ email, password }));
    }
  };

  return (
    <View style={{ ...styles.container, paddingBottom: isFocus ? 0 : 120 }}>
      <Text style={styles.title}>Войти</Text>
      <View style={styles.form}>
        <Input
          style={{}}
          onFocus={setIsFocus}
          placeholder="Адрес электронной почты"
          autoCompleteType="email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <View style={styles.containerPass}>
          <Input
            style={{}}
            onFocus={() => setIsFocus(true)}
            placeholder="Пароль"
            autoCompleteType="password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            isSecure={isSecure}
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
        {isFocus || (
          <View View style={{ marginTop: 43 }}>
            <Btn
              onPress={login}
              title={"Войти"}
              style={{ color: "#FFFFFF", backgroundColor: "#FF6C00" }}
            />
            <Btn
              onPress={() => {
                navigation.navigate("Registration");
              }}
              title={"Нет аккаунта? Зарегистрироваться"}
              style={{ color: "#1B4371" }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
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
});
