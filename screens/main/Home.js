/** @format */
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MapScreen from "./MapScreen";
import PostsScreen from "./PostsScreen";
import CommentsScreen from "./CommentsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import BtnQuit from "../../components/btnQuit";
import { outUser } from "../../redux/auth/operations";
import { useSelector, useDispatch } from "react-redux";
outUser;

const Home = () => {
  const dispatch = useDispatch();
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Публикации"
        component={PostsScreen}
        options={{
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
        name="Создать публикацию"
        component={CreatePostsScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Map"
        component={MapScreen}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Комментарии"
        component={CommentsScreen}
        options={{ tabBarShown: false }}
      />
    </Stack.Navigator>
  );
};
export default Home;
