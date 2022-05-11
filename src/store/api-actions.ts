import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorServerHandle } from '../services/error-handle';
import { api } from './store';
import { fetchGuitars, setLoading } from './catalog-data/catalog-data';
import { ApiActions, APIRoute, LoadingStatus } from '../const';
import { GuitarDTO } from '../types/guitar';

export const fetchGuitarsAction = createAsyncThunk(
  ApiActions.FetchCatalog,
  async (_,{ dispatch }) => {
    dispatch(setLoading(LoadingStatus.Pending));

    try {
      const { data } = await api.get<GuitarDTO[]>(APIRoute.Catalog);

      dispatch(fetchGuitars(data));
    } catch (error) {
      errorServerHandle(error);
    }

    dispatch(setLoading(LoadingStatus.Idle));
  });
