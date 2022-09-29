/** @format */

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MapScreen from "./MapScreen";
import PostsScreen from "./PostsScreen";
import CommentsScreen from "./CommentsScreen";
import BtnQuit from "../../components/button/btnQuit";
import { outUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публикации",
          headerRight: () => (
            <BtnQuit
              onPress={() => {
                dispatch(outUser());
              }}
            />
          ),
          headerRightContainerStyle: { paddingRight: 10 },
        }}
      />

      <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{ title: "Карта", headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: "Комментарии",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default Home;
