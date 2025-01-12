// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
