/** @format */
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  FlatList,
  View,
  TextInput,
} from "react-native";
import Container from "../../components/container";
import ItemComment from "../../components/itemComment";
import { getUserComment, writeUserComment } from "../../redux/posts/operations";
import image from "../../image/pexels-photo-1563356.jpeg";
import InputComment from "../../components/inputComment";

const CommentsScreen = ({ route }) => {
  const { comments: data } = useSelector((store) => store.userPosts.post);
  const { id } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserComment(id));
  }, []);

  const addComment = (value) => {
    dispatch(writeUserComment({ id, value, data }));
    dispatch(getUserComment(id));
  };

  const renderItem = ({ item }) => <ItemComment data={item} />;

  return (
    <Container>
      <ImageBackground source={image} style={styles.img} />
      <FlatList
        style={{ marginTop: 32 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.date}
      />
      <InputComment addComment={addComment} />
    </Container>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  img: {
    height: 240,
    backgroundColor: "#2596be",
    overflow: "hidden",
    borderRadius: 8,
  },
  name: { marginTop: 8, color: "#212121", fontSize: 16 },
});
