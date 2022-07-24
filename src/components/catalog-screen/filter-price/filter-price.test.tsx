import MockAdapter from 'axios-mock-adapter';
import * as Redux from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import FilterPrice from './filter-price';
import { createAPI } from '../../../services/api';
import { makeFakeCatalogData, makeFakeProductData, makeFakeReviewsData } from '../../../utils/mocks';
import { APIRoute, LoadingStatus } from '../../../constants/const';
import { ParamKey } from '../../../constants/params';
import { State } from '../../../types/store';

describe('Component: FilterPrice', () => {
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

  it('Должен быть корректный рендер', async () => {
    const history = createMemoryHistory();
    const dispatch = jest.fn().mockImplementation(() => Promise.resolve(3));

    useDispatchMock.mockReturnValue(dispatch);

    const store = mockStore({
      ...initialState,
    });

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <FilterPrice />
        </Router>
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText(/Цена, ₽/)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/Максимальная цена/)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/Минимальная цена/)).toBeInTheDocument();
    });
  });

  it('После рендера должен быть диспатч и отрисовка минимальной и максимальной цены из запроса', async () => {
    const mockGuitarsData = makeFakeCatalogData();
    const history = createMemoryHistory();

    const store = mockStore({
      ...initialState,
    });

    useDispatchMock.mockReturnValue(store.dispatch);

    mockAPI
      .onGet(APIRoute.Catalog)
      .reply(200, mockGuitarsData);

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <FilterPrice />
        </Router>
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getAllByPlaceholderText(mockGuitarsData[0].price)[0]).toBeInTheDocument();
    });

    expect(screen.getAllByPlaceholderText(mockGuitarsData[0].price)[1]).toBeInTheDocument();
  });

  it('При вводе значения, меньшего минимальной цены, цена должна стать равной минимальной, в адресной строке должны появиться query параметры', async () => {
    const mockGuitarsData = makeFakeCatalogData();
    const history = createMemoryHistory();

    const store = mockStore({
      ...initialState,
    });

    useDispatchMock.mockReturnValue(store.dispatch);

    mockAPI
      .onGet(APIRoute.Catalog)
      .reply(200, mockGuitarsData);

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <FilterPrice />
        </Router>
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getAllByPlaceholderText(mockGuitarsData[0].price).length).toBe(2);
    });

    const input = screen.getAllByPlaceholderText(mockGuitarsData[0].price)[0] as HTMLInputElement;

    fireEvent.change(input, {target: {value: `${mockGuitarsData[0].price - 5000}`}});

    await waitFor(() => {
      expect(input.value).toBe(`${mockGuitarsData[0].price - 5000}`);
    });

    fireEvent.blur(input);

    await waitFor(() => {
      expect(input.value).toBe(mockGuitarsData[0].price.toString());
    });

    expect(history.location.search).toContain(`${ParamKey.PriceGte}=${mockGuitarsData[0].price}`);
  });

  it('При вводе значения, большего максимальной цены, цена должна стать равной максимальной, в адресной строке должны появиться query параметры', async () => {
    const mockGuitarsData = makeFakeCatalogData();
    const history = createMemoryHistory();

    const store = mockStore({
      ...initialState,
    });

    useDispatchMock.mockReturnValue(store.dispatch);

    mockAPI
      .onGet(APIRoute.Catalog)
      .reply(200, mockGuitarsData);

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <FilterPrice />
        </Router>
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getAllByPlaceholderText(mockGuitarsData[0].price).length).toBe(2);
    });

    const input = screen.getAllByPlaceholderText(mockGuitarsData[0].price)[1] as HTMLInputElement;

    fireEvent.change(input, {target: {value: `${mockGuitarsData[0].price + 5000}`}});

    await waitFor(() => {
      expect(input.value).toBe(`${mockGuitarsData[0].price + 5000}`);
    });

    fireEvent.blur(input);

    await waitFor(() => {
      expect(input.value).toBe(mockGuitarsData[0].price.toString());
    });

    expect(history.location.search).toContain(`${ParamKey.PriceLte}=${mockGuitarsData[0].price}`);
  });
});
