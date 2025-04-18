import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/User/UserSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
