import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

// Login API
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get Users List API
export const getUsers = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/users?page=${page}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Update User API
export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Delete User API
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
