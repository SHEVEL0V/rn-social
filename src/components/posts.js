/** @format */

import { Background } from "@react-navigation/elements";
import { useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ItemPost from "../components/itemPost";
import { getUserPost } from "../redux/posts/operations";

const Posts = ({ navigation, like }) => {
  const posts = useSelector((store) => store.userPosts.data);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(getUserPost());
    }, [])
  );

  const renderItem = ({ item }) => (
    <ItemPost posts={posts} data={item} navigation={navigation} like={like} />
  );
  return (
    <FlatList
      style={{ marginTop: 10 }}
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Posts;
