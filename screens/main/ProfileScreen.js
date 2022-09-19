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

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
