import { render, screen, waitFor } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import { Action } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import * as Redux from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Reviews from './reviews';
import { createAPI } from '../../../services/api';
import { fetchReviews, setTotalReviewsCount } from '../../../store/reviews-data/reviews-data';
import { makeFakeCatalogData, makeFakeProductData, makeFakeReviewsData } from '../../../utils/mocks';
import { APIRoute, LoadingStatus, ModalType, NameSpace, REVIEW_PER_STEP } from '../../../const';
import { State } from '../../../types/store';

describe('Component: Reviews', () => {
  const history = createMemoryHistory();
  const guitarId = 1;
  const total = 7;

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

  it('Должен быть корректный рендер', () => {
    let store = mockStore({
      ...initialState,
    });

    const { rerender } = render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <Reviews guitarId={ guitarId } />,
        </Router>
      </Provider>,
    );

    expect(screen.getAllByText(/Достоинства/).length).toBe(initialState.REVIEWS_DATA.reviews.length);
    expect(screen.getByText(/Отзывы/)).toBeInTheDocument();
    expect(screen.getByText(/Наверх/)).toBeInTheDocument();

    store = mockStore({
      ...initialState,
      REVIEWS_DATA: {
        loading: LoadingStatus.Pending,
        reviews: [],
        totalCount: 0,
      },
    });

    rerender(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <Reviews guitarId={ guitarId } />,
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/Достоинства/)).not.toBeInTheDocument();
    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  it('Показывается кнопка showMore когда отзывов больше трёх', () => {
    let store = mockStore({
      ...initialState,
    });

    const { rerender } = render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <Reviews guitarId={ guitarId } />,
        </Router>
      </Provider>,
    );

    expect(screen.queryByText(/Показать еще отзывы/)).not.toBeInTheDocument();

    store = mockStore({
      ...initialState,
      REVIEWS_DATA: {
        ...initialState.REVIEWS_DATA,
        totalCount: 4,
      },
    });

    rerender(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <Reviews guitarId={ guitarId } />,
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Показать еще отзывы/)).toBeInTheDocument();
  });

  it('Запрашиваются отзывы при нажатии на кнопку showMore', async () => {
    const store = mockStore({
      ...initialState,
      REVIEWS_DATA: {
        ...initialState.REVIEWS_DATA,
        totalCount: total,
      },
    });

    useDispatchMock.mockReturnValue(store.dispatch);

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <Reviews guitarId={ guitarId } />,
        </Router>
      </Provider>,
    );

    const showMore = screen.getByText(/Показать еще отзывы/);

    // Если пытаться проверить как обычно на то, с какими параметрами вызывался диспатч, то выдаёт Function Anonimous и никак не получить аргументы
    // Пол дня пытался решить эту проблему, но так и не удалось получить функцию и аргументы.

    const reviewRequest = {
      start: initialState.REVIEWS_DATA.reviews.length,
      end: initialState.REVIEWS_DATA.reviews.length + REVIEW_PER_STEP,
      id: guitarId,
    };

    const commentPath = `${APIRoute.Catalog}/${reviewRequest.id}/comments/`;
    const queryPath = `?_start=${reviewRequest.start}&_end=${reviewRequest.end}&_sort=createAt&_order=desc`;
    const path = `${commentPath}${queryPath}`;

    mockAPI
      .onGet(path)
      .reply(200, makeFakeReviewsData(), { 'x-total-count': total });

    expect(store.getState().REVIEWS_DATA?.reviews?.length).toBe(3);

    userEvent.click(showMore);

    await waitFor(() => {
      const actions = store.getActions().map(({ type }) => type);
      expect(actions).toContain(setTotalReviewsCount.toString());
    });

    await waitFor(() => {
      const actions = store.getActions().map(({ type }) => type);
      expect(actions).toContain(fetchReviews.toString());
    });
  });

  it('Открывается модальное окно с формой при нажатии на кнопку Оставить отзыв', () => {
    const store = mockStore({
      ...initialState,
    });

    const dispatch = jest.fn();

    useDispatchMock.mockReturnValue(dispatch);

    expect(dispatch).not.toHaveBeenCalled();

    render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>
          <Reviews guitarId={ guitarId } />,
        </Router>
      </Provider>,
    );

    const openModalButton = screen.getByRole('button', { name: 'Оставить отзыв' });

    userEvent.click(openModalButton);

    expect(useDispatchMock).toBeCalledTimes(1);
    expect(dispatch).nthCalledWith(1, {
      payload: ModalType.Review,
      type: `${NameSpace.StateApp}/setOpenModal`,
    });
  });
});
