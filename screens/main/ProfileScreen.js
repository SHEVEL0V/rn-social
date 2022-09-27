/** @format */

import { StyleSheet, View, ImageBackground } from "react-native";
import Posts from "../../components/posts";
import Avatar from "../../components/avatar";
import BtnQuit from "../../components/button/btnQuit";
import bgImage from "../../assets/PhotoBG.png";

const ProfileScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
      source={bgImage}
    >
      <View style={styles.container}>
        <BtnQuit style={styles.outBtn} />
        <Avatar />
        <Posts navigation={navigation} like={true} />
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 147,
    padding: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  outBtn: { position: "absolute", right: 16, top: 24 },
});
