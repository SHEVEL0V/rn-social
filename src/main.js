/** @format */

import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { authUser } from "./redux/auth/operations";

export default function Main() {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.userAuth.isAuth);

  useEffect(() => {
    dispatch(authUser());
  }, []);

  const routing = useRoute(isAuth);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
