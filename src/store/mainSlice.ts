import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMobileMenuOpen: false,
  isModalOpen: false,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    toggleMobileMenuOpen: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    setModalOpen: (state) => {
      state.isModalOpen = true;
    },
    setModalClose: (state) => {
      state.isModalOpen = false;
    },
  },
});

export const { toggleMobileMenuOpen, setModalOpen, setModalClose } = mainSlice.actions;
