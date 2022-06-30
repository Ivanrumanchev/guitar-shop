import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Action } from '@reduxjs/toolkit';
import App from './app';
import { api } from '../../store/store';
import { makeFakeCatalogData, makeFakeProductData } from '../../utils/mocks';
import { AppRoute, DEFAULT_PAGE, LoadingStatus } from '../../constants/const';
import { State } from '../../types/store';

describe('Application Routing', () => {
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  const store = mockStore({
    CATALOG_DATA: {
      loading: LoadingStatus.Idle,
      guitars: makeFakeCatalogData(),
      totalCount: 0,
    },
    PRODUCT_DATA: {
      loading: LoadingStatus.Idle,
      guitar: makeFakeProductData(),
    },
    REVIEWS_DATA: {
      loading: LoadingStatus.Idle,
      reviews: [],
      totalCount: 0,
    },
    STATE_APP: {
      openedModal: null,
    },
  });

  const getFakeAppWithHistory = (path: string): JSX.Element => {
    const history = createMemoryHistory();

    history.push(path);

    return (
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <App />
        </Router>
      </Provider>
    );
  };

  it('Должен быть отрендерен CatalogScreen когда путь "/catalog/1"', () => {
    const path = `${AppRoute.Catalog}/${DEFAULT_PAGE}`;

    const fakeApp = getFakeAppWithHistory(path);

    render(fakeApp);

    const textElement = screen.getByText(/Каталог гитар/i);

    expect(textElement).toBeInTheDocument();
  });

  it('Должен быть отрендерен ProductScreen когда путь "/product/1"', () => {
    const path = `${AppRoute.Product}/${DEFAULT_PAGE}`;

    const fakeApp = getFakeAppWithHistory(path);

    render(fakeApp);

    const textElement = screen.getByText(/Отзывы/i);

    expect(textElement).toBeInTheDocument();
  });

  it('Должено быть перенаправление на первую гитару, когда путь "/product"', () => {
    const path = AppRoute.Product;

    const history = createMemoryHistory();

    history.push(path);

    const fakeApp =  (
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <App />
        </Router>
      </Provider>
    );

    render(fakeApp);

    expect(history.location.pathname).toBe(`${AppRoute.Product}/${DEFAULT_PAGE}`);
  });

  it('Должено быть перенаправление на первую страницу каталога, когда путь "/"', () => {
    const path = AppRoute.Root;

    const history = createMemoryHistory();

    history.push(path);

    const fakeApp =  (
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <App />
        </Router>
      </Provider>
    );

    render(fakeApp);

    expect(history.location.pathname).toBe(`${AppRoute.Catalog}/${DEFAULT_PAGE}`);
  });

  it('Должено быть перенаправление на первую страницу каталога, когда путь "/catalog"', () => {
    const path = AppRoute.Catalog;

    const history = createMemoryHistory();

    history.push(path);

    const fakeApp =  (
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <App />
        </Router>
      </Provider>
    );

    render(fakeApp);

    expect(history.location.pathname).toBe(`${AppRoute.Catalog}/${DEFAULT_PAGE}`);
  });

  it('Должен быть отрендерен NotFoundScreen когда путь не совпадает ни с чем', () => {
    const path = '/random/path';

    const fakeApp = getFakeAppWithHistory(path);

    render(fakeApp);

    const textElement = screen.getByText(/Page not found/i);

    expect(textElement).toBeInTheDocument();
  });
});
