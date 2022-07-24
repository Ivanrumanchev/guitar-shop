import Filter from './filter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { LoadingStatus } from '../../../constants/const';
import { makeFakeCatalogData, makeFakeProductData, makeFakeReviewsData } from '../../../utils/mocks';
import * as Redux from 'react-redux';
import { Provider } from 'react-redux';

describe('Component: Filter', () => {
  const mockStore = configureMockStore();

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
          <Filter />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Фильтр/)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/Максимальная цена/)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/Тип гитар/)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText(/Количество струн/)).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByRole('button', {name: 'Очистить'})).toBeInTheDocument();
    });
  });
});
