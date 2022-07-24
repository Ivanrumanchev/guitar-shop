import MockAdapter from 'axios-mock-adapter';
import * as Redux from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import FormSearch from './form-search';
import { createAPI } from '../../../services/api';
import { makeFakeCatalogData, makeFakeProductData, makeFakeReviewsData } from '../../../utils/mocks';
import { APIRoute, AppRoute, LoadingStatus } from '../../../constants/const';
import { State } from '../../../types/store';

describe('Component: FormSearch', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);

  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  const initialState = {
    CATALOG_DATA: {
      loading: LoadingStatus.Idle,
      guitars: makeFakeCatalogData(),
      totalCount: 3,
    },
    PRODUCT_DATA: {
      loading: LoadingStatus.Idle,
      guitar: makeFakeProductData(),
    },
    REVIEWS_DATA: {
      loading: LoadingStatus.Idle,
      reviews: makeFakeReviewsData(),
      totalCount: 3,
    },
    STATE_APP: {
      openedModal: null,
    },
  };

  const useDispatchMock = jest.spyOn(Redux, 'useDispatch');

  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  it('Должен быть корректный рендер', () => {
    const history = createMemoryHistory();

    const dispatch = jest.fn().mockImplementation(() => Promise.resolve(3));

    useDispatchMock.mockReturnValue(dispatch);

    const store = mockStore({
      ...initialState,
    });

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <FormSearch />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Сбросить поиск/)).toBeInTheDocument();
    expect(screen.getByText(/Начать поиск/)).toBeInTheDocument();
  });

  it('На каждый ввод символа должен происходить запрос к серверу', async () => {
    const mockGuitarsData = [makeFakeCatalogData(), makeFakeCatalogData(), makeFakeCatalogData()];
    const history = createMemoryHistory();

    const store = mockStore({
      ...initialState,
    });

    useDispatchMock.mockReturnValue(store.dispatch);

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <FormSearch />
        </Router>
      </Provider>,
    );

    const input = screen.getByPlaceholderText('что вы ищите?') as HTMLInputElement;

    for (let i = 0; i < mockGuitarsData.length; i++) {
      mockAPI
        .onGet(APIRoute.Catalog)
        .reply(200, mockGuitarsData[i]);

      expect(screen.queryByText(mockGuitarsData[i][0].name)).not.toBeInTheDocument();

      fireEvent.change(input, {target: {value: 'Гитара'.slice(i)}});

      await waitFor(() => {
        expect(screen.getByText(mockGuitarsData[i][0].name)).toBeInTheDocument();
        i++;
      });
    }
  });

  it('При нажатии на кнопку сброса, должны исчезнуть предложения гитар', async () => {
    const mockGuitarsData = makeFakeCatalogData();
    const history = createMemoryHistory();

    mockAPI
      .onGet(APIRoute.Catalog)
      .reply(200, mockGuitarsData);

    const store = mockStore({
      ...initialState,
    });

    useDispatchMock.mockReturnValue(store.dispatch);

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <FormSearch />
        </Router>
      </Provider>,
    );

    const input = screen.getByPlaceholderText('что вы ищите?') as HTMLInputElement;

    fireEvent.change(input, {target: {value: 1}});

    await waitFor(() => {
      expect(screen.getByText(mockGuitarsData[0].name)).toBeInTheDocument();
    });

    const resetButton = screen.getByRole('button', {name: 'Сбросить поиск'});

    fireEvent.click(resetButton);

    expect(screen.queryByText(mockGuitarsData[0].name)).not.toBeInTheDocument();
  });

  it('При нажатии на предложение из выпадающего списка, должнен быть редирект', async () => {
    const mockGuitarsData = makeFakeCatalogData();
    const history = createMemoryHistory();

    mockAPI
      .onGet(APIRoute.Catalog)
      .reply(200, mockGuitarsData);

    const store = mockStore({
      ...initialState,
    });

    useDispatchMock.mockReturnValue(store.dispatch);

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <FormSearch />
        </Router>
      </Provider>,
    );

    const input = screen.getByPlaceholderText('что вы ищите?') as HTMLInputElement;

    fireEvent.change(input, {target: {value: 1}});

    await waitFor(() => {
      expect(screen.getByText(mockGuitarsData[0].name)).toBeInTheDocument();
    });

    const searchedGuitar = screen.getByText(mockGuitarsData[0].name);

    fireEvent.click(searchedGuitar);

    expect(history.location.pathname).toBe(`${AppRoute.Product}/${mockGuitarsData[0].id}`);
  });
});
