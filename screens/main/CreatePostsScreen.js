/** @format */
import { Camera, CameraType } from "expo-camera";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import { TextInput, StyleSheet, ImageBackground, View } from "react-native";
import Btn from "../../components/button";
import BtnCamera from "../../components/btnCamera";
import BtnNavigate from "../../components/btnNavigate";
import Container from "../../components/container";

import { useSelector, useDispatch } from "react-redux";
import { addUserPost } from "../../redux/posts/operations";

const CreatePostsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isOpenCamera, setIsOpenCamera] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [namePhoto, setNamePhoto] = useState(null);
  const [nameLocation, setNameLocation] = useState(null);
  const [location, setLocation] = useState();

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync();
    const { coords } = await Location.getCurrentPositionAsync({});

    setLocation(coords);
    setPhoto(uri);
  };
  const isActive = () => (namePhoto && nameLocation && photo ? true : false);

  const uploadPhotoToServer = async () => {};

  const cteatePost = () => {
    if (isActive()) {
      dispatch(addUserPost(namePhoto, nameLocation, location));
    }

    // navigation.navigate("Публикации");
  };

  return (
    <Container>
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

      <TextInput
        style={styles.input}
        placeholder="Название..."
        value={namePhoto}
        onChangeText={(value) => setNamePhoto(value)}
      />
      <View style={styles.mapInput}>
        <BtnNavigate onPress={() => navigation.navigate("Map")} />
        <TextInput
          placeholder="  Местность..."
          style={{ fontSize: 16 }}
          value={nameLocation}
          onChangeText={(value) => setNameLocation(value)}
        />
      </View>
      <Btn
        onPress={cteatePost}
        title={"Опубликовать"}
        style={{
          color: isActive() ? "#FFFFFF" : "#BDBDBD",
          backgroundColor: isActive() ? "#FF6C00" : "#E5E5E5",
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
