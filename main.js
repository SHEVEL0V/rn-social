/** @format */

import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./router";
import { useSelector, useDispatch } from "react-redux";

export default function Main() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const routing = useRoute(isAuth);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
