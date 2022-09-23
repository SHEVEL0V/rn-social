/** @format */

import { StyleSheet, ImageBackground, Text, View } from "react-native";
import BtnNavigate from "./btnNavigate";
import BtnPost from "./btnPost";
import Container from "./container";

const ItemPost = ({ navigation }) => {
  return (
    <Container>
      <ImageBackground style={styles.img} />
      <Text style={styles.name}>forest</Text>
      <View style={styles.postContainer}>
        <BtnPost
          onPress={() => {
            navigation.navigate("Комментарии");
          }}
        />
        <BtnNavigate
          title={"Kiev"}
          onPress={() => {
            navigation.navigate("Map");
          }}
        />
      </View>
    </Container>
  );
};

export default ItemPost;

const styles = StyleSheet.create({
  img: {
    height: 240,
    backgroundColor: "#2596be",
    borderRadius: 8,
  },
  name: { marginTop: 8, color: "#212121", fontSize: 16 },
  postContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
