import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, LoadingStatus } from '../../const';
import { ProductData } from '../../types/store';

const initialState: ProductData = {
  loading: LoadingStatus.Idle,
  guitar: null,
};

export const productData = createSlice({
  name: NameSpace.ProductData,
  initialState,
  reducers: {
    fetchProduct(state, action) {
      state.guitar = action.payload;
    },
    setProductLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { fetchProduct, setProductLoading } = productData.actions;