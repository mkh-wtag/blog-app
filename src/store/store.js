import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "features/register/postsSlice";
import registerReducer from "features/register/registerSlice";

const store = configureStore({
  reducer: {
    registeredUsers: registerReducer,
    allPosts: postsReducer,
  },
});

export default store;
