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
      return {
        isAuthenticated: true,
      };
    }
  } catch (e) {
    throw e.message;
  }
});
export const logoutUser = createAsyncThunk('logoutUser', async () => {
  try {
    await AsyncStorage.removeItem('user');
    return {
      isAuthenticated: false,
    };
  } catch (e) {
    console.log(e, 'Error');
    throw 'Something went wrong, Try again!';
  }
});

const authUserSlice = createSlice({
  name: 'auth',
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
      })
      .addCase(logoutUser.pending, state => {
        state.loading = true;
        state.hasError = undefined;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
      })
      .addCase(logoutUser.rejected, state => {
        state.hasError = true;
        state.loading = false;
      });
  },
});

export default authUserSlice.reducer;
