/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [], post: { comments: [] } };

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPost: (state, { payload }) => {
      state.data = payload;
    },
    setComment: (state, { payload }) => {
      state.post = payload;
    },
  },
});

export const { setPost, setComment } = postsSlice.actions;

export default postsSlice.reducer;
