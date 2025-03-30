import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Features/User/UserSlice';

const Store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default Store;
