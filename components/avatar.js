/** @format */
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Avatar = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  console.log(image);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => pickImage()}>
        <AntDesign
          name="pluscircleo"
          size={25}
          color={image ? "#BDBDBD" : "#FF6C00"}
        />
      </TouchableOpacity>
      <View style={styles.containerImg}>
        <ImageBackground
          style={styles.img}
          source={{ uri: image }}
        ></ImageBackground>
      </View>
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
  },
  containerImg: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  img: { flex: 1 },
  button: {
    zIndex: 10,
    position: "absolute",
    right: -12,
    top: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",

    borderRadius: "50%",
  },
  text: {
    color: "#FF6C00",
    fontSize: 18,
  },
});
