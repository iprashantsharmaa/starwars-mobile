import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authenticateUser } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isAuthenticated: false,
  loading: false,
  hasError: false,
  errorMessage: '',
};

export const loginUser = createAsyncThunk('loginUser', async ({ data }) => {
  try {
    const response = await authenticateUser(data);
    if (response.status === 'success') {
      await AsyncStorage.setItem('user', response?.user);
      return {
        isAuthenticated: true,
      };
    }
  } catch (e) {
    throw e.message;
  }
});

const authenticateUserSlice = createSlice({
  name: 'authenticateUser',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
        state.hasError = undefined;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.hasError = true;
        state.errorMessage = action?.error?.message;
        state.loading = false;
      });
  },
});

export default authenticateUserSlice.reducer;
