import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { StateApp } from '../../types/store';

const initialState: StateApp = {
  openedModal: null,
};

export const stateApp = createSlice({
  name: NameSpace.StateApp,
  initialState,
  reducers: {
    setOpenModal(state, action) {
      if (action.payload) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }

      state.openedModal = action.payload;
    },
  },
});

export const { setOpenModal } = stateApp.actions;
