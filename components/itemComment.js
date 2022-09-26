/** @format */

import { View, StyleSheet, Text } from "react-native";

const ItemComment = ({ data }) => {
  const date = new Date(data.date);
  const d = date.toUTCString();

  return (
    <View style={styles.container}>
      <View style={styles.commentContainer}>
        <Text style={styles.text}>{data.value}</Text>
        <Text style={styles.time}>{d}</Text>
      </View>
      <View style={styles.logoContainer}></View>
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
  logoContainer: {
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
