import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import ModalNewReview from './modal-new-review';
import { makeFakeCatalogData, makeFakeProductData } from '../../../utils/mocks';
import { LoadingStatus, ModalType } from '../../../constants/const';

describe('Component: ModalNewReview', () => {
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
      reviews: [],
      totalCount: 0,
    },
    STATE_APP: {
      openedModal: ModalType.Review,
    },
  };

  it('Должен быть корректный рендер', () => {
    let store = mockStore({
      ...initialState,
    });

    const { rerender } = render(
      <Provider store={ store }>
        <ModalNewReview />,
      </Provider>,
    );

    expect(screen.getByText(/Оставить отзыв/)).toBeInTheDocument();

    store = mockStore({
      ...initialState,
      PRODUCT_DATA: {
        loading: LoadingStatus.Pending,
        guitar: null,
      },
    });

    rerender(
      <Provider store={ store }>
        <ModalNewReview />,
      </Provider>,
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
