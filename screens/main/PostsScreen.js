/** @format */

import { Background } from "@react-navigation/elements";

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
import Container from "../../components/container";
import ItemPost from "../../components/itemPost";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const PostsScreen = ({ navigation }) => {
  const renderItem = (item) => <ItemPost navigation={navigation} />;
  return (
    <Container>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Создать публикацию");
        }}
      >
        <View style={styles.avatarContainer}></View>
        <Text style={styles.text}>PostsScreen</Text>
      </TouchableOpacity>
      <FlatList
        style={{ marginTop: 10 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#FF6C00",
  },
  text: {
    marginLeft: 10,
  },
});
