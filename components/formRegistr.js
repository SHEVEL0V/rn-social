/** @format */
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Btn from "./button/button";
import { useDispatch } from "react-redux";
import { signUpUser } from "../redux/auth/operations";
import Input from "./input";
import AvatarSign from "./avatarSign";

const FormRegistration = ({ navigation, isFocus, setIsFocus }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [photoUri, setPhotoUri] = useState("");
  const [isSecure, setIsSecure] = useState(true);
  const dispatch = useDispatch();

  const onRegister = () => {
    if ((name !== "", email !== "", password !== ""))
      dispatch(signUpUser({ email, password, name, photoUri }));
  };

  return (
    <View style={{ ...styles.container, paddingBottom: isFocus ? 30 : 60 }}>
      <AvatarSign photoUri={photoUri} setPhotoUri={setPhotoUri} />
      <Text style={styles.title}>Регистрация</Text>
      <View style={styles.form}>
        <Input
          onFocus={setIsFocus}
          placeholder="Логин"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <Input
          onFocus={setIsFocus}
          placeholder="Адрес электронной почты"
          autoCompleteType="email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <View style={styles.containerPass}>
          <Input
            onFocus={setIsFocus}
            placeholder="Пароль"
            secureTextEntry={isSecure}
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
          <View style={{ marginTop: 43 }}>
            <Btn
              onPress={onRegister}
              title={"Зарегистрироваться"}
              style={{ color: "#FFFFFF", backgroundColor: "#FF6C00" }}
            />
            <Btn
              onPress={() => {
                navigation.navigate("Login");
              }}
              title={"Уже есть аккаунт? Войти"}
              style={{ color: "#1B4371" }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default FormRegistration;

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
