/** @format */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import Avatar from "./avatar";

const AvatarSign = ({ photoUri, setPhotoUri }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPhotoUri(result.uri);
    }
  };

  return <Avatar uri={photoUri} onPress={() => pickImage()} />;
};

export default AvatarSign;
