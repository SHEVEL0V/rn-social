/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = { keyboardStatus: false };

const optionalSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    isOpenKeyboard: (state) => {
      state.keyboardStatus = true;
    },
    isCloseKeyboard: (state) => {
      state.keyboardStatus = false;
    },
  },
});

export const { isOpenKeyboard, isCloseKeyboard } = optionalSlice.actions;

export default optionalSlice.reducer;
