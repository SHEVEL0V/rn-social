/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = { keyboardStatus: false };

const optionalsdSlise = createSlice({
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

export const { isOpenKeyboard, isCloseKeyboard } = optionalsdSlise.actions;

export default optionalsdSlise.reducer;
