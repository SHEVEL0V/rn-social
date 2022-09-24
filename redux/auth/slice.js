/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { signupUser, loginUser, outUser } from "./operations";
// import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  user: {},
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isAuth = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload;
      })
      .addCase(outUser.fulfilled, (state, action) => {
        state.isAuth = false;
      });
  },
});

export default authSlice.reducer;
