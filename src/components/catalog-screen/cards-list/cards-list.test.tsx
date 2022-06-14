import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import * as Redux from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import CardsList from './cards-list';
import { makeFakeCatalogData, makeFakeProductData } from '../../../utils/mocks';
import { LoadingStatus } from '../../../const';

describe('Component: CardsList', () => {
  const history = createMemoryHistory();

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
      reviews: [],
      totalCount: 0,
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
          <CardsList guitars={initialState.CATALOG_DATA.guitars} />,
        </Router>
      </Provider>,
    );

    expect(screen.getAllByText(/Подробнее/).length).toBe(initialState.CATALOG_DATA.guitars.length);

    store = mockStore({
      ...initialState,
      CATALOG_DATA: {
        loading: LoadingStatus.Pending,
        guitars: [],
        totalCount: 0,
      },
    });

    rerender(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <CardsList guitars={initialState.CATALOG_DATA.guitars} />,
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/Подробнее/)).not.toBeInTheDocument();
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
