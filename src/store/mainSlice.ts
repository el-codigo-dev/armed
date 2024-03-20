import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMobileMenuOpen: false,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    toggleMobileMenuOpen: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
  },
});

export const {toggleMobileMenuOpen} = mainSlice.actions;
