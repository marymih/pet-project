import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegistered: false,
  user: null,
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.isRegistered = true;
      state.user = action.payload;
      state.loading = false;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isRegistered = false;
      state.user = null;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure, logout } =
  registerSlice.actions;

export default registerSlice.reducer;
