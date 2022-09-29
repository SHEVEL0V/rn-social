/** @format */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import Home from "./screens/main/Home";
import LoginScreen from "./screens/auth/loginScreen";
import RegistrationScreen from "./screens/auth/registrationScreen";
import PostsScreen from "./screens/main/PostsScreen";
import CreatePostsScreen from "./screens/main/CreatePostsScreen";
import ProfileScreen from "./screens/main/ProfileScreen";
// icon
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const useRoute = (isAuth) => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  if (isAuth) {
    return (
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <View style={focused && styles.iconContainer}>
                <AntDesign
                  name="appstore-o"
                  size={24}
                  color={focused ? "#fff" : color}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="CreatePost"
          component={CreatePostsScreen}
          options={{
            title: "Создать публикацию",
            headerShown: true,
            tabBarIcon: ({ focused, color }) => (
              <View style={focused && styles.iconContainer}>
                <Feather
                  name="plus"
                  size={24}
                  color={focused ? "#fff" : color}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <View style={focused && styles.iconContainer}>
                <Feather
                  name="user"
                  size={24}
                  color={focused ? "#fff" : color}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default useRoute;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6C00",
  },
});
