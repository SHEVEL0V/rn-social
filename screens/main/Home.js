/** @format */
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MapScreen from "./MapScreen";
import PostsScreen from "./PostsScreen";
import CommentsScreen from "./CommentsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import BtnQuit from "../../components/button/btnQuit";
import { outUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
outUser;

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
        options={{ title: "Карта" }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ title: "Комментарии", tabBarShown: false }}
      />
    </Stack.Navigator>
  );
};
export default Home;
