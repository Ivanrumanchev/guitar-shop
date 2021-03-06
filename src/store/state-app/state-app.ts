import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants/const';
import { StateApp } from '../../types/store';

const initialState: StateApp = {
  openedModal: null,
};

export const stateApp = createSlice({
  name: NameSpace.StateApp,
  initialState,
  reducers: {
    setOpenModal(state, action) {
      state.openedModal = action.payload;
    },
  },
});

export const { setOpenModal } = stateApp.actions;
