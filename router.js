/** @format */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./screens/auth/loginScreen";
import RegistrationScreen from "./screens/auth/registrationScreen";
import HomeScreen from "./screens/main/HomeScreen";
import PostsScreen from "./screens/main/PostsScreen";
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
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign name="appstore-o" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign name="pluscircleo" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <Feather name="user" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default useRoute;
