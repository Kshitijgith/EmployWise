import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (page) => {
  const response = await axiosInstance.get(`/api/users?page=${page}`);
  return response.data.data;
});

export const updateUser = createAsyncThunk("users/updateUser", async (user) => {
  await axiosInstance.put(`/api/users/${user.id}`, user);
  return user;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await axiosInstance.delete(`/api/users/${id}`);
  return id;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.list.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = state.list.filter((user) => user.id !== action.payload);
      });
  },
});

export default userSlice.reducer;
