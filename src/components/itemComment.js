/** @format */

import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import { getTime } from "../helpers/date";

const ItemComment = ({ data }) => {
  const { photoURL } = useSelector((state) => state.userAuth.user);
  const date = getTime(data.date);

  return (
    <View style={styles.container}>
      <View style={styles.commentContainer}>
        <Text style={styles.text}>{data.value}</Text>
        <Text style={styles.time}>{date}</Text>
      </View>
      <ImageBackground
        source={{ url: photoURL }}
        style={styles.avatar}
      ></ImageBackground>
    </View>
  );
};

export default ItemComment;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 24,
  },
  avatar: {
    overflow: "hidden",
    marginLeft: 16,
    width: 28,
    height: 28,
    borderRadius: "50%",
    backgroundColor: "#4B596D",
  },
  commentContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#00000008",
    borderRadius: 6,
    borderTopRightRadius: 0,
  },
  text: {
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    marginBottom: 8,
  },
  time: {
    fontSize: 10,
    textAlign: "left",
    color: "#BDBDBD",
  },
});
