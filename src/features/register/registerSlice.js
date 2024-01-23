import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    users: [],
  },
  reducers: {
    createUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { createUser } = registerSlice.actions;

export default registerSlice.reducer;
