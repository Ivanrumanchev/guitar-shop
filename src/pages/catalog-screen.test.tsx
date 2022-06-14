import { render, screen, waitFor } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';
import MockAdapter from 'axios-mock-adapter';
import * as Redux from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import CatalogScreen from './catalog-screen';
import { createAPI } from '../services/api';
import { fetchGuitars, setTotalGuitarsCount } from '../store/catalog-data/catalog-data';
import { makeFakeCatalogData } from '../utils/mocks';
import { APIRoute, LoadingStatus } from '../const';
import { State } from '../types/store';

describe('Component: CatalogScreen', () => {
  const history = createMemoryHistory();
  const total = 9;

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
      guitar: null,
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
    const store = mockStore({
      ...initialState,
    });

    const dispatch = jest.fn().mockImplementation(() => Promise.resolve(3));

    useDispatchMock.mockReturnValue(dispatch);

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <CatalogScreen />,
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Каталог гитар/)).toBeInTheDocument();
  });

  it('После загрузки компонента должен быть диспатч', async () => {
    const store = mockStore({
      ...initialState,
    });

    history.push(`${APIRoute.Catalog}/1`);

    useDispatchMock.mockReturnValue(store.dispatch);

    const guitarRequest = {
      start: 0,
      end: 9,
    };

    const path = `${APIRoute.Catalog}/?_start=${guitarRequest.start}&_end=${guitarRequest.end}`;

    mockAPI
      .onGet(path)
      .reply(200, makeFakeCatalogData(), { 'x-total-count': total });

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <CatalogScreen />,
        </Router>
      </Provider>,
    );

    await waitFor(() => {
      const actions = store.getActions().map(({ type }) => type);
      expect(actions).toContain(setTotalGuitarsCount.toString());
    });

    await waitFor(() => {
      const actions = store.getActions().map(({ type }) => type);
      expect(actions).toContain(fetchGuitars.toString());
    });
  });
});

