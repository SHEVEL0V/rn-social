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
import AvatarMini from "../../components/avatarMini";
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
      <AvatarMini />
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

const styles = StyleSheet.create({});
