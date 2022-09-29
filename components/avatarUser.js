/** @format */
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { updateUserAvatar } from "../redux/auth/operations";
import Avatar from "./avatar";

const AvatarUser = () => {
  const dispatch = useDispatch();
  const { photoURL } = useSelector((store) => store.userAuth.user);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      dispatch(updateUserAvatar(result.uri));
    }
  };

  return <Avatar url={photoURL} onPress={() => pickImage()} />;
};

export default AvatarUser;
