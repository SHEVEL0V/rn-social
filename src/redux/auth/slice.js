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
    authentication(state, { payload }) {
      state.isAuth = payload.isAuth;
      state.user = payload.user;
    },
    updateUserProfile(state, { payload }) {
      state.user = payload.user;
    },
    out(state) {
      state.isAuth = false;
    },
  },
});
export const { signap, authentication, updateUserProfile, out } =
  authSlice.actions;
export default authSlice.reducer;
