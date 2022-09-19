/** @format */
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Avatar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 120,
    height: 120,
    marginTop: -60,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  button: {
    position: "absolute",
    right: -12,
    top: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#FF6C00",
  },
  text: {
    color: "#FF6C00",
    fontSize: 18,
  },
});
