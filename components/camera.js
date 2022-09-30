/** @format */
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";
import { useState } from "react";
import { StyleSheet, ImageBackground, View, Text } from "react-native";
import BtnCamera from "./button/btnCamera";

const CameraCont = ({ setLocation, setPhoto, photo }) => {
  const [isOpenCamera, setIsOpenCamera] = useState(false);
  const [camera, setCamera] = useState(null);

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync();
    await Location.requestForegroundPermissionsAsync();
    const { coords } = await Location.getCurrentPositionAsync({});
    setLocation(coords);
    setPhoto(uri);
  };

  return (
    <>
      <View style={styles.cameraContainer}>
        {isOpenCamera ? (
          <Camera style={styles.camera} ref={setCamera} type={CameraType.back}>
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
      <Text style={styles.text}>
        {isOpenCamera ? "Загрузите фото" : "Редактировать фото"}
      </Text>
    </>
  );
};

export default CameraCont;

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

  image: {
    height: "100%",
    width: 240,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    color: "#BDBDBD",
  },
});
