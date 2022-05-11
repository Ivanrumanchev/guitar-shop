import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, LoadingStatus } from '../../const';
import { CatalogData } from '../../types/store';

const initialState: CatalogData = {
  loading: LoadingStatus.Idle,
  guitars: [],
  currentRequestId: '',
  error: null,
};

export const catalogData = createSlice({
  name: NameSpace.CatalogData,
  initialState,
  reducers: {
    fetchGuitars(state, action) {
      state.guitars = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { fetchGuitars, setLoading } = catalogData.actions;
