/** @format */

import { StyleSheet, ImageBackground, Text, View } from "react-native";
import BtnNavigate from "./button/btnNavigate";
import BtnPost from "./button/btnPost";
import Container from "./container";
import image from "../image/pexels-photo-1563356.jpeg";
import BtnLike from "./button/btnLike";

const ItemPost = ({ navigation, data, posts, like = false }) => {
  const { namePhoto, id, nameLocation, location } = data;

  const post = posts.filter((el) => el.id === id);
  const qty = post[0].comments.length;

  return (
    <Container>
      <ImageBackground style={styles.img} source={image} />
      <Text style={styles.name}>{namePhoto}</Text>
      <View style={styles.postContainer}>
        <BtnPost
          qty={qty}
          onPress={() => {
            navigation.navigate("Comments", { id });
          }}
        />
        {like && <BtnLike />}
        <BtnNavigate
          title={nameLocation}
          onPress={() => {
            navigation.navigate("Map", { location });
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
    overflow: "hidden",
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
