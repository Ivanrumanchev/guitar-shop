import { render, screen } from '@testing-library/react';
import * as Redux from 'react-redux';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import CardItem from './card-item';
import { makeFakeCatalogData, makeFakeProductData, makeFakeReviewsData } from '../../../utils/mocks';
import { AppRoute, LoadingStatus } from '../../../const';

describe('Component: CardItem', () => {
  const history = createMemoryHistory();

  const mockStore = configureMockStore();

  const initialState = {
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
    const store = mockStore({
      ...initialState,
    });

    const dispatch = jest.fn().mockImplementation(() => Promise.resolve(3));

    useDispatchMock.mockReturnValue(dispatch);

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <CardItem guitar={ initialState.PRODUCT_DATA.guitar } />,
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Подробнее/)).toBeInTheDocument();
    expect(screen.getByAltText(initialState.PRODUCT_DATA.guitar.name)).toBeInTheDocument();
  });

  it('Должен быть редирект когда пользователь нажал на ссылку "Подробнее"', () => {
    const store = mockStore({
      ...initialState,
    });

    const dispatch = jest.fn().mockImplementation(() => Promise.resolve(3));

    useDispatchMock.mockReturnValue(dispatch);

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <CardItem guitar={ initialState.PRODUCT_DATA.guitar } />,
        </Router>
      </Provider>,
    );

    const productLinkElement = screen.getByText(/Подробнее/);

    expect(history.location.pathname).not.toBe(`${AppRoute.Product}/${initialState.PRODUCT_DATA.guitar.id}`);

    userEvent.click(productLinkElement);

    expect(history.location.pathname).toBe(`${AppRoute.Product}/${initialState.PRODUCT_DATA.guitar.id}`);
  });
});

