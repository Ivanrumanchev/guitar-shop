import { AppDispatch } from './../types/store';
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorServerHandle } from '../services/error-handle';
import { fetchGuitars, setCatalogLoading, setTotalGuitarsCount } from './catalog-data/catalog-data';
import { fetchProduct, setProductLoading } from './product-data/product-data';
import { setOpenModal } from './state-app/state-app';
import { addNewReview, fetchReviews, setReviewsLoading, setTotalReviewsCount } from './reviews-data/reviews-data';
import { ApiActions, APIRoute, HttpCode, LoadingStatus, ModalType } from '../constants/const';
import { GuitarDTO } from '../types/guitar';
import { NewReview, ReviewDTO } from '../types/review';
import { GuitarRequest, ParamsWithString, ReviewRequest } from '../types/api-action';

export const fetchGuitarsAction = createAsyncThunk<
  void,
  GuitarRequest,
  {
    dispatch: AppDispatch,
    extra: AxiosInstance,
  }
>(ApiActions.FetchCatalog, async ({ start, end, rest }, { dispatch, extra: api }) => {
  dispatch(setCatalogLoading(LoadingStatus.Pending));

  try {
    const path = `${APIRoute.Catalog}/?_start=${start}&_end=${end}&_embed=comments${rest ? `&${rest}` : ''}`;

    const { data, headers } = await api.get<GuitarDTO[]>(path);

    const total = headers['x-total-count'];

    dispatch(setTotalGuitarsCount(+total));

    dispatch(fetchGuitars(data));
  } catch (error) {
    errorServerHandle(error);
  }

  dispatch(setCatalogLoading(LoadingStatus.Idle));
});

export const fetchProductAction = createAsyncThunk<
  void,
  number,
  {
  dispatch: AppDispatch,
  extra: AxiosInstance,
  }
>(ApiActions.FetchProduct, async (id, { dispatch, rejectWithValue, extra: api }) => {
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

export const fetchReviewsAction = createAsyncThunk<
  void,
  ReviewRequest,
  {
    dispatch: AppDispatch,
    extra: AxiosInstance
  }
>(ApiActions.FetchReviews, async (reviewRequest, { dispatch, extra: api }) => {
  dispatch(setReviewsLoading(LoadingStatus.Pending));

  try {
    const commentPath = `${APIRoute.Catalog}/${reviewRequest.id}/comments/`;
    const queryPath = `?_start=${reviewRequest.start}&_end=${reviewRequest.end}&_sort=createAt&_order=desc`;
    const path = `${commentPath}${queryPath}`;

    const { data, headers } = await api.get<ReviewDTO>(path);

    const total = headers['x-total-count'];

    dispatch(setTotalReviewsCount(+total));

    dispatch(fetchReviews(data));
  } catch (error) {
    errorServerHandle(error);
  }

  dispatch(setReviewsLoading(LoadingStatus.Idle));
});

export const postReviewAction = createAsyncThunk<
  void,
  NewReview,
  {
    dispatch: AppDispatch,
    extra: AxiosInstance
  }
>(ApiActions.PostReview, async (reviewRequest, { dispatch, rejectWithValue, extra: api }) => {
  try {
    const { data } = await api.post(APIRoute.Comments, reviewRequest);

    dispatch(setOpenModal(ModalType.SuccessReview));
    document.body.style.overflow = 'hidden';

    dispatch(addNewReview(data));
  } catch (error) {
    errorServerHandle(error);

    return rejectWithValue('');
  }
});

export const searchGuitarsAction = createAsyncThunk<
  GuitarDTO,
  ParamsWithString,
  {
    dispatch: AppDispatch,
    extra: AxiosInstance
  }
>(ApiActions.FetchSearchingGuitar, async ({ params, rest }, { extra: api }) => {
  try {
    const path = `${APIRoute.Catalog}${rest ? `/?${rest}` : ''}`;

    const { data } = await api.get(path, { params });

    return data;
  } catch (error) {
    errorServerHandle(error);
  }
});
