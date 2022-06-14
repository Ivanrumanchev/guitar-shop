import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { LoadingStatus } from '../../const';
import { makeFakeCatalogData, makeFakeProductData } from '../../utils/mocks';
import Layout from './layout';

describe('Component: Layout', () => {
  it('Должен быть корректный рендер', () => {
    const mockStore = configureMockStore();

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

    const history = createMemoryHistory();

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <Layout />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Каталог/)).toBeInTheDocument();
    expect(screen.getByText(/Поиск/)).toBeInTheDocument();
    expect(screen.getByText(/Магазин гитар, музыкальных инструментов и гитарная мастерская/)).toBeInTheDocument();
    expect(screen.getByTestId('svg-sprite')).toBeInTheDocument();
  });
});
