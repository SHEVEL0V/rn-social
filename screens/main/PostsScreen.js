/** @format */
import AvatarMini from "../../components/avatarMini";
import Container from "../../components/container";
import Posts from "../../components/posts";

const PostsScreen = ({ navigation }) => {
  return (
    <Container>
      <AvatarMini navigation={navigation} />
      <Posts navigation={navigation} />
    </Container>
  );
};

export default PostsScreen;
