/** @format */

import { Background } from "@react-navigation/elements";
import { useEffect, useState } from "react";

import {
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AvatarMini from "../../components/avatarMini";
import Container from "../../components/container";
import ItemPost from "../../components/itemPost";
import { getUserPost } from "../../redux/posts/operations";

const PostsScreen = ({ navigation }) => {
  const posts = useSelector((store) => store.userPosts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPost());
  }, []);

  const renderItem = ({ item }) => (
    <ItemPost posts={posts} data={item} navigation={navigation} />
  );
  return (
    <Container>
      <AvatarMini navigation={navigation} />

      <FlatList
        style={{ marginTop: 10, marginHorizontal: -16 }}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({});
