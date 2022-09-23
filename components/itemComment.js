/** @format */

import { View, StyleSheet, Text } from "react-native";

const ItemComent = ({ comment }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}></View>
      <View style={styles.commentContainer}>
        <Text>{comment}</Text>
      </View>
    </View>
  );
};

export default ItemComent;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 24,
  },
  logoContainer: {
    marginRight: 16,
    width: 28,
    height: 28,
    borderRadius: "50%",
    backgroundColor: "#f7dda7",
  },
  commentContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#BDBDBD",
    borderRadius: 6,
  },
});
