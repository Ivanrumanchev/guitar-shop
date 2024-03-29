import { Action } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api';
import { fetchGuitarsAction, fetchProductAction, fetchReviewsAction, postReviewAction, searchGuitarsAction } from './api-actions';
import { fetchGuitars } from './catalog-data/catalog-data';
import { fetchProduct } from './product-data/product-data';
import { addNewReview, fetchReviews, setTotalReviewsCount } from './reviews-data/reviews-data';
import { setOpenModal } from './state-app/state-app';
import { makeFakeCatalogData, makeFakeNewReviewData, makeFakeProductData, makeFakeReviewsData } from '../utils/mocks';
import { APIRoute } from '../constants/const';
import { State } from '../types/store';
import { ParamKey, ParamValue } from '../constants/params';
import { Params } from '../types/api-action';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('Должен записать в стор гитары когда сервер возвращает 200', async () => {
    const mockCatalogData = makeFakeCatalogData();
    const guitarRequest = { start: 0, end: 9 };

    mockAPI
      .onGet(`${APIRoute.Catalog}/?_start=${guitarRequest.start}&_end=${guitarRequest.end}&_embed=comments`)
      .reply(200, mockCatalogData, { 'x-total-count': '3' });

    const store = mockStore();

    await store.dispatch(fetchGuitarsAction(guitarRequest));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(fetchGuitars.toString());
  });

  it('Должен записать в стор конкретную гитару когда сервер возвращает 200', async () => {
    const mockProductData = makeFakeProductData();
    const id = 2;

    mockAPI
      .onGet(`${APIRoute.Catalog}/${id}`)
      .reply(200, mockProductData);

    const store = mockStore();

    await store.dispatch(fetchProductAction(id));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(fetchProduct.toString());
  });

  it('Должен записать в стор кол-во отзывов и сами отзывы когда сервер возвращает 200', async () => {
    const mockReviewsData = makeFakeReviewsData();
    const reviewRequest = { start: 0, end: 3, id: 2 };
    const total = 3;

    const commentPath = `${APIRoute.Catalog}/${reviewRequest.id}/comments/`;
    const queryPath = `?_start=${reviewRequest.start}&_end=${reviewRequest.end}&_sort=createAt&_order=desc`;
    const path = `${commentPath}${queryPath}`;

    mockAPI
      .onGet(path)
      .reply(200, mockReviewsData, { 'x-total-count': total });

    const store = mockStore();

    await store.dispatch(fetchReviewsAction(reviewRequest));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(setTotalReviewsCount.toString());
    expect(actions).toContain(fetchReviews.toString());
  });

  it('Должен записать в стор новый отзыв и изменить модальное окно когда сервер возвращает 200', async () => {
    const mockNewReviewData = makeFakeNewReviewData();

    mockAPI
      .onPost(APIRoute.Comments, mockNewReviewData)
      .reply(200, mockNewReviewData);

    const store = mockStore();

    await store.dispatch(postReviewAction(mockNewReviewData));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(setOpenModal.toString());
    expect(actions).toContain(addNewReview.toString());
  });

  it('Должен вернуть гитары по нужным параметрам когда сервер возвращает 200', async () => {
    const mockGuitarsData = makeFakeCatalogData();
    const FIRST_GUITAR_NUMBER = '0';
    const LIMIT_GUITAR = '1';

    const configLow: Params = {
      [ParamKey.Start]: FIRST_GUITAR_NUMBER,
      [ParamKey.Limit]: LIMIT_GUITAR,
      [ParamKey.Sort]: ParamValue.Price,
      [ParamKey.Order]: ParamValue.Asc,
    };

    mockAPI
      .onGet(APIRoute.Catalog)
      .reply(200, mockGuitarsData);

    const store = mockStore();

    const res = await store.dispatch(searchGuitarsAction({params: configLow}));

    expect(res.payload).toEqual(mockGuitarsData);
  });
});
