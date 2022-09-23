/** @format */
import {
  StyleSheet,
  ImageBackground,
  FlatList,
  View,
  TextInput,
} from "react-native";
import BtnAdd from "../../components/btnAdd";
import Container from "../../components/container";
import ItemComent from "../../components/itemComment";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    text: "Thank you! That was very helpful!",
  },
];

const CommentsScreen = () => {
  const renderItem = (item) => <ItemComent comment={"111"} />;
  return (
    <Container>
      <ImageBackground style={styles.img} />
      <FlatList
        style={{ marginTop: 32 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.input}>
        <TextInput placeholder="Комментировать..." />
        <BtnAdd />
      </View>
    </Container>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  img: {
    height: 240,
    backgroundColor: "#2596be",
    borderRadius: 8,
  },
  name: { marginTop: 8, color: "#212121", fontSize: 16 },
  postContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 8,
    height: 50,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 100,
  },
});
