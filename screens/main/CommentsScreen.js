/** @format */
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { StyleSheet, ImageBackground, FlatList, Keyboard } from "react-native";
import Container from "../../components/container";
import ItemComment from "../../components/itemComment";
import { getUserComment, writeUserComment } from "../../redux/posts/operations";
import InputComment from "../../components/inputComment";

const CommentsScreen = ({ route }) => {
  const keyboardStatus = useSelector((store) => store.optionals.keyboardStatus);
  const { comments: data, imageURL } = useSelector(
    (store) => store.userPosts.post
  );
  const { id } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserComment(id));
  }, []);

  const addComment = (value) => {
    if (value === "") {
      Keyboard.dismiss();
      return;
    }
    dispatch(writeUserComment({ id, value, data }));
    dispatch(getUserComment(id));
    Keyboard.dismiss();
  };

  const renderItem = ({ item }) => <ItemComment data={item} />;

  return (
    <Container margin={true} addListener={true}>
      <ImageBackground source={{ uri: imageURL }} style={styles.img} />
      {keyboardStatus || (
        <FlatList
          style={{ marginTop: 32 }}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.date}
        />
      )}
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
});
