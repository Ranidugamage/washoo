import { configureStore } from "@reduxjs/toolkit";
import branchReducer from "./Slice/branchSlice";
import userReducer from "./Slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    branch: branchReducer,
  },
});
