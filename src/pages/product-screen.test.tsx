import { render, screen, waitFor } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import { createMemoryHistory } from 'history';
import * as Redux from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import ProductScreen from './product-screen';
import { createAPI } from '../services/api';
import { fetchProduct } from '../store/product-data/product-data';
import { makeFakeProductData } from '../utils/mocks';
import { APIRoute, AppRoute, BroadcrumbsName, LoadingStatus } from '../const';
import { State } from '../types/store';

describe('Component: ProductScreen', () => {
  const history = createMemoryHistory();
  const guitarId = 1;

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
      guitars: [],
      totalCount: 0,
    },
    PRODUCT_DATA: {
      loading: LoadingStatus.Idle,
      guitar: makeFakeProductData(),
    },
    REVIEWS_DATA: {
      loading: LoadingStatus.Idle,
      reviews: [],
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
    let store = mockStore({
      ...initialState,
    });

    const dispatch = jest.fn().mockImplementation(() => Promise.resolve(3));

    useDispatchMock.mockReturnValue(dispatch);

    const { rerender } = render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <ProductScreen />
        </Router>
      </Provider>,
    );

    const name = store.getState().PRODUCT_DATA?.guitar?.name;

    const guitarName = name ? name : BroadcrumbsName.Product;

    expect(screen.getAllByText(guitarName).length).toBe(3);

    store = mockStore({
      ...initialState,
      PRODUCT_DATA: {
        loading: LoadingStatus.Pending,
        guitar: null,
      },
    });

    rerender(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <ProductScreen />
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(guitarName)).not.toBeInTheDocument();
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('После загрузки компонента должен быть диспатч', async () => {
    const store = mockStore({
      ...initialState,
      PRODUCT_DATA: {
        loading: LoadingStatus.Idle,
        guitar: null,
      },
    });

    history.push(`${AppRoute.Product}/${guitarId}`);

    useDispatchMock.mockReturnValue(store.dispatch);

    mockAPI
      .onGet(`${APIRoute.Catalog}/${guitarId}`)
      .reply(200, makeFakeProductData());

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <ProductScreen />,
        </Router>
      </Provider>,
    );

    await waitFor(() => {
      const actions = store.getActions().map(({ type }) => type);
      expect(actions).toContain(fetchProduct.toString());
    });
  });

  it('Должен отобразиться компонент NotFound при неудачном запросе', async () => {
    const store = mockStore({
      ...initialState,
      PRODUCT_DATA: {
        loading: LoadingStatus.Idle,
        guitar: null,
      },
    });

    history.push(`${AppRoute.Product}/${guitarId}`);

    useDispatchMock.mockReturnValue(store.dispatch);

    mockAPI
      .onGet(`${APIRoute.Catalog}/${guitarId}`)
      .reply(404, 'Error');

    expect(screen.queryByText(/Page not found/)).not.toBeInTheDocument();

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <ProductScreen />,
        </Router>
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText(/Page not found/)).toBeInTheDocument();
    });
  });
});

