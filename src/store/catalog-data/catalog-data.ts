import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, LoadingStatus } from '../../const';
import { CatalogData } from '../../types/store';

const initialState: CatalogData = {
  loading: LoadingStatus.Idle,
  guitars: [],
  totalCount: 0,
};

export const catalogData = createSlice({
  name: NameSpace.CatalogData,
  initialState,
  reducers: {
    fetchGuitars(state, action) {
      state.guitars = action.payload;
    },
    setCatalogLoading(state, action) {
      state.loading = action.payload;
    },
    setTotalGuitarsCount(state, action) {
      state.totalCount = action.payload;
    },
  },
});

export const { fetchGuitars, setCatalogLoading, setTotalGuitarsCount } = catalogData.actions;
