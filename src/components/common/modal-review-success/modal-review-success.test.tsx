import { render, screen } from '@testing-library/react';
import * as Redux from 'react-redux';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';
import ModalReviewSuccess from './modal-review-success';
import ModalLayout from '../modal-layout/modal-layout';
import { makeFakeCatalogData, makeFakeProductData } from '../../../utils/mocks';
import { NameSpace, LoadingStatus, ModalType } from '../../../constants/const';

describe('Component: ModalReviewSuccess', () => {
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
      openedModal: ModalType.SuccessReview,
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

    render(
      <Provider store={ store }>
        <ModalReviewSuccess />,
      </Provider>,
    );

    expect(screen.getByText(/Спасибо за ваш отзыв!/)).toBeInTheDocument();
  });

  it('Должен закрывать модальное окно при нажатии на кнопку "К покупкам!"', async () => {
    let store = mockStore({
      ...initialState,
    });

    const dispatch = jest.fn();

    useDispatchMock.mockReturnValue(dispatch);

    expect(dispatch).not.toHaveBeenCalled();

    const { rerender } = render(
      <Provider store={ store }>
        <ModalLayout />,
      </Provider>,
    );

    const buttonElement = screen.getByRole('button', {name: 'К покупкам!'});

    await userEvent.click(buttonElement);

    expect(useDispatchMock).toBeCalledTimes(3);
    expect(dispatch).nthCalledWith(1, {
      payload: null,
      type: `${NameSpace.StateApp}/setOpenModal`,
    });

    store = mockStore({
      ...initialState,
      STATE_APP: {
        openedModal: null,
      },
    });

    rerender(
      <Provider store={ store }>
        <ModalLayout />,
      </Provider>,
    );

    expect(screen.queryByText(/Спасибо за ваш отзыв!/)).not.toBeInTheDocument();
  });
});

