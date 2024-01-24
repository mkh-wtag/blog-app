import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "features/register/registerSlice";

const store = configureStore({
  reducer: {
    registeredUsers: registerReducer,
  },
});

export default store;
