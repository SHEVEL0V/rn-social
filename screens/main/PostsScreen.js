/** @format */

import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Text,
  View,
  TextInput,
} from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
