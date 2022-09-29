/** @format */
import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

const AvatarMini = ({ navigation }) => {
  const { displayName, photoURL, email } = useSelector(
    (state) => state.userAuth.user
  );

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate("CreatePost");
      }}
    >
      <ImageBackground
        style={styles.avatarContainer}
        source={{ url: photoURL }}
      ></ImageBackground>
      <View>
        <Text style={{ ...styles.text, fontWeight: "bold" }}>
          {displayName}
        </Text>
        <Text style={styles.text}>{email}</Text>
      </View>
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
    overflow: "hidden",
    borderRadius: 16,
    backgroundColor: "#4B596D",
  },
  text: {
    marginLeft: 10,
    fontSize: 13,
  },
});
