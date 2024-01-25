import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    createPost: (state, action) => {
      state.posts.push(action.payload);
    },
    loadPosts: (state) => {
      if (localStorage.getItem("posts")) {
        state.posts = JSON.parse(localStorage.getItem("posts"));
      }
    },
  },
});

export const { createPost, loadPosts } = postsSlice.actions;

export default postsSlice.reducer;
