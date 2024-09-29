import { User } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const userEmptyState: User = {
  username: "",
  image: "",
  email: "",
  token: "",
  refreshToken: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: userEmptyState,
  reducers: {
    createUser: (_, action) => action.payload,
    modifyUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => userEmptyState,
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;