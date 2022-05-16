import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorServerHandle } from '../services/error-handle';
import { api } from './store';
import { fetchGuitars, setCatalogLoading, setTotalCount } from './catalog-data/catalog-data';
import { fetchProduct, setProductLoading } from './product-data/product-data';
import { ApiActions, APIRoute, HttpCode, LoadingStatus } from '../const';
import { GuitarDTO } from '../types/guitar';

type GuitarRequest = {
  start: number,
  end: number,
}

export const fetchGuitarsAction = createAsyncThunk<void, GuitarRequest>(
  ApiActions.FetchCatalog,
  async (guitarRequest, { dispatch }) => {
    dispatch(setCatalogLoading(LoadingStatus.Pending));

    try {
      const path = `${APIRoute.Catalog}/?_start=${guitarRequest.start}&_end=${guitarRequest.end}`;

      const { data, headers } = await api.get<GuitarDTO[]>(path);

      const total = headers['x-total-count'];

      dispatch(setTotalCount(+total));

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
