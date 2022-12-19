/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userAuth from "./auth/slice";
import userPosts from "./posts/slice";
import optionals from "./optionals/slice";

export const store = configureStore({
  reducer: {
    userAuth,
    userPosts,
    optionals,
  },
});
