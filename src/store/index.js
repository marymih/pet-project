import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import registerReducer from '../features/registerSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
  },
});

export default store;
