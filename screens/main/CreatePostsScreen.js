/** @format */
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import { TextInput, StyleSheet, ImageBackground, View } from "react-native";
import Btn from "../../components/button";
import BtnCamera from "../../components/btnCamera";
import BtnNavigate from "../../components/btnNavigate";
import Container from "../../components/container";

const CreatePostsScreen = ({ navigation }) => {
  const [isOpenCamera, setIsOpenCamera] = useState(false);
  const [camera, setCamera] = useState("");
  const [photo, setPhoto] = useState("");
  const [namePhoto, setNamePhoto] = useState();
  const [location, setLocation] = useState();

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync();
    setPhoto(uri);
  };

  useEffect(() => {
    if (photo !== "")
      async () => setLocation(await Location.getCurrentPositionAsync({}));
  }, [photo]);

  return (
    <Container>
      <View style={styles.cameraContainer}>
        {isOpenCamera ? (
          <Camera style={styles.camera} ref={setCamera}>
            <BtnCamera
              onPress={() => {
                takePhoto(), setIsOpenCamera(false);
              }}
            />
          </Camera>
        ) : (
          <ImageBackground style={styles.image} source={{ uri: photo }}>
            <BtnCamera
              style={{ backgroundColor: "#fff" }}
              onPress={() => setIsOpenCamera(true)}
            />
          </ImageBackground>
        )}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Название..."
        value={namePhoto}
        onChangeText={(value) => setNamePhoto(value)}
      />
      <View style={styles.mapInput}>
        <BtnNavigate onPress={() => navigation.navigate("Map")} />
        <TextInput placeholder="  Местность..." style={{ fontSize: 16 }} />
      </View>
      <Btn
        onPress={() => {
          navigation.navigate("Публикации");
        }}
        title={"Опубликовать"}
        style={{
          color: true ? "#FFFFFF" : "#BDBDBD",
          backgroundColor: true ? "#FF6C00" : "#E5E5E5",
        }}
      />
    </Container>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  cameraContainer: {
    height: 240,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
  },
  camera: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 66,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
  },
  mapInput: {
    flexDirection: "row",
    marginBottom: 35,
    alignItems: "center",
    height: 66,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
  },

  image: {
    height: "100%",
    width: 240,

    justifyContent: "center",
    alignItems: "center",
  },
});
