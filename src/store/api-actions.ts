import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorServerHandle } from '../services/error-handle';
import { api } from './store';
import { fetchGuitars, setCatalogLoading } from './catalog-data/catalog-data';
import { fetchProduct, setProductLoading } from './product-data/product-data';
import { ApiActions, APIRoute, HttpCode, LoadingStatus } from '../const';
import { GuitarDTO } from '../types/guitar';

export const fetchGuitarsAction = createAsyncThunk(
  ApiActions.FetchCatalog,
  async (_, { dispatch }) => {
    dispatch(setCatalogLoading(LoadingStatus.Pending));

    try {
      const { data } = await api.get<GuitarDTO[]>(APIRoute.Catalog);

      dispatch(fetchGuitars(data));
    } catch (error) {
      errorServerHandle(error);
    }

    dispatch(setCatalogLoading(LoadingStatus.Idle));
  });

export const fetchProductAction = createAsyncThunk<void, number>(
  ApiActions.FetchProduct,
  async (id, { dispatch, rejectWithValue }) => {
    dispatch(setProductLoading(LoadingStatus.Pending));

    try {
      const { data } = await api.get<GuitarDTO>(`${APIRoute.Catalog}/${id}`);

      dispatch(fetchProduct(data));
    } catch (error) {
      const err = errorServerHandle(error);

      if (err === HttpCode.NotFound) {
        return rejectWithValue(err);
      }
    }

    dispatch(setProductLoading(LoadingStatus.Idle));
  });
