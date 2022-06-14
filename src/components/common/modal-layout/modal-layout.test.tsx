import { fireEvent, render, screen } from '@testing-library/react';
import * as Redux from 'react-redux';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';
import ModalLayout from './modal-layout';
import { makeFakeCatalogData, makeFakeProductData } from '../../../utils/mocks';
import { NameSpace, LoadingStatus, ModalType } from '../../../const';

describe('Component: ModalLayout', () => {
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
    let store = mockStore({
      ...initialState,
    });

    const { rerender } = render(
      <Provider store={ store }>
        <ModalLayout />,
      </Provider>,
    );

    const overlayElement = screen.getByTestId('overlay');

    expect(overlayElement).toBeInTheDocument();

    expect(screen.getByText(/Спасибо за ваш отзыв!/)).toBeInTheDocument();
    expect(screen.queryByText(/Оставить отзыв/)).not.toBeInTheDocument();

    store = mockStore({
      ...initialState,
      STATE_APP: {
        openedModal: ModalType.Review,
      },
    });

    rerender(
      <Provider store={ store }>
        <ModalLayout />,
      </Provider>,
    );

    expect(screen.getByText(/Оставить отзыв/)).toBeInTheDocument();
    expect(screen.queryByText(/Спасибо за ваш отзыв!/)).not.toBeInTheDocument();

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

    expect(screen.queryByText(/Оставить отзыв/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Спасибо за ваш отзыв!/)).not.toBeInTheDocument();
  });

  // Не понимаю, как правильно тестировать взаимодействие со стором. По идее мы уже проверили в других тестах, что при диспатче стор меняет своё состояние. Поэтому должно быть достаточно перерендерить компонент с изменённым стором и посмотреть, что будет всё правильно отрисовано. Я долго мучался, но так и не удалось в моковом сторе изменить состояние с помощью диспатча. Наверное диспатч поменяет состояние, только если это будет настоящий стор, сконфигурированный с помощью configureStore..

  it('Должен закрывать модальное окно при нажатии на overlay', async () => {
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

    const modalLayout = screen.getByTestId('modal-layout');
    const overlayElement = screen.getByTestId('overlay');

    expect(modalLayout).toHaveProperty('style.display', 'block');

    expect(useDispatchMock).toBeCalledTimes(3); //Не могу понять, почему 3 раза вызывается диспатч в тестах, хотя ещё ничего не произошло

    await userEvent.click(overlayElement);

    expect(useDispatchMock).toBeCalledTimes(3); //Не могу понять, те же 3 раза.. в dev tools всё ок
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

    expect(modalLayout).toHaveProperty('style.display', 'none');
  });

  it('Должен закрывать модальное окно при нажатии кнопку ESC', async () => {
    let store = mockStore({
      ...initialState,
      STATE_APP: {
        openedModal: ModalType.Review,
      },
    });

    const dispatch = jest.fn();

    useDispatchMock.mockReturnValue(dispatch);

    expect(dispatch).not.toHaveBeenCalled();

    const { rerender } = await render(
      <Provider store={ store }>
        <ModalLayout />,
      </Provider>,
    );

    const modalLayout = screen.getByTestId('modal-layout');

    expect(modalLayout).toHaveProperty('style.display', 'block');

    expect(useDispatchMock).toHaveBeenCalledTimes(3); //Не могу понять, почему 3 раза вызывается диспатч в тестах, хотя ещё ничего не произошло

    await fireEvent.keyDown(modalLayout, { key: 'Escape', code: 'Escape', charCode: 27, keyCode: 27 });

    expect(useDispatchMock).toHaveBeenCalledTimes(3); //Не могу понять, те же 3 раза...
    expect(dispatch).toHaveBeenNthCalledWith(1, {
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

    expect(modalLayout).toHaveProperty('style.display', 'none');
  });
});

