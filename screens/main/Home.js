/** @format */
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MapScreen from "./MapScreen";
import PostsScreen from "./PostsScreen";
import CommentsScreen from "./CommentsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import BtnQuit from "../../components/btnQuit";

const Home = () => {
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
                console.log("Quit auth");
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

