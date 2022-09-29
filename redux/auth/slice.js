/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signap(state, { payload }) {
      state.isAuth = payload.isAuth;
    },
    login(state, { payload }) {
      state.isAuth = payload.isAuth;
      state.user = payload.user;
    },
    authentication(state, { payload }) {
      state.isAuth = payload.isAuth;
      state.user = payload.user;
    },
    updateUserProfile(state, { payload }) {
      state.user = payload.user;
    },
    out(state, { payload }) {
      state.isAuth = false;
    },
  },
});
export const { signap, login, authentication, updateUserProfile, out } =
  authSlice.actions;
export default authSlice.reducer;
