/** @format */
import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

const AvatarMini = () => {
  const name = useSelector((state) => state.auth.user);
  console.log(name);
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate("Создать публикацию");
      }}
    >
      <ImageBackground style={styles.avatarContainer}></ImageBackground>
      <Text style={styles.text}>{""}</Text>
      <Text style={styles.text}>{"name"}</Text>
    </TouchableOpacity>
  );
};

export default AvatarMini;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#FF6C00",
  },
  text: {
    marginLeft: 10,
  },
});
