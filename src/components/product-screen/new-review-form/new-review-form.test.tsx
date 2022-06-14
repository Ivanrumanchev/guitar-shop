import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { Action } from '@reduxjs/toolkit';
import thunk, { ThunkDispatch } from 'redux-thunk';
import * as Redux from 'react-redux';
import { Provider } from 'react-redux';
import NewReviewForm from './new-review-form';
import { makeFakeProductData, makeFakeReviewsData } from '../../../utils/mocks';
import { APIRoute, LoadingStatus, ModalType, Rating, RequiredFieldMessage } from '../../../const';
import { createAPI } from '../../../services/api';
import { State } from '../../../types/store';
import { setOpenModal } from '../../../store/state-app/state-app';
import { addNewReview } from '../../../store/reviews-data/reviews-data';

describe('Component: NewReviewForm', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  const GUITAR_ID_MOCK = 1;
  const ratingVariants = Object.values(Rating).filter((value) => typeof value === 'number').reverse();

  const initialState = {
    CATALOG_DATA: {
      loading: LoadingStatus.Idle,
      guitars: [],
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
      openedModal: ModalType.Review,
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

    const dispatch = jest.fn();

    useDispatchMock.mockReturnValue(dispatch);

    render(
      <Provider store={ store }>
        <NewReviewForm guitarId={ GUITAR_ID_MOCK } />,
      </Provider>,
    );

    expect(screen.getByText(/Ваше Имя/)).toBeInTheDocument();
    expect(screen.getByText(/Достоинства/)).toBeInTheDocument();
    expect(screen.getByText(/Недостатки/)).toBeInTheDocument();
    expect(screen.getByText(/Комментарий/)).toBeInTheDocument();
    ratingVariants.forEach((rating) => expect(screen.getByTestId(`rating-${rating}`)).toBeInTheDocument());
    expect(screen.getByRole('button', { name: 'Отправить отзыв' })).toBeInTheDocument();
  });

  it('Должны быть провалидированы поля', async () => {
    const store = mockStore({
      ...initialState,
    });

    const dispatch = jest.fn();

    useDispatchMock.mockReturnValue(dispatch);

    render(
      <Provider store={ store }>
        <NewReviewForm guitarId={ GUITAR_ID_MOCK } />,
      </Provider>,
    );

    const userNameField = screen.getByTestId('userName');
    const advantageField = screen.getByTestId('advantage');
    const disadvantageField = screen.getByTestId('disadvantage');
    const commentField = screen.getByTestId('comment');
    const submitButton = screen.getByRole('button', { name: 'Отправить отзыв' });

    userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getAllByText(RequiredFieldMessage.Text).length).toBe(4);
    });

    await waitFor(() => {
      expect(screen.getByText(RequiredFieldMessage.Radio)).toBeInTheDocument();
    });

    userEvent.type(userNameField, 'Name');

    await waitFor(() => {
      expect(screen.getAllByText(RequiredFieldMessage.Text).length).toBe(3);
    });

    userEvent.type(advantageField, 'advantage');

    await waitFor(() => {
      expect(screen.getAllByText(RequiredFieldMessage.Text).length).toBe(2);
    });

    userEvent.type(disadvantageField, 'disadvantage');

    await waitFor(() => {
      expect(screen.getAllByText(RequiredFieldMessage.Text).length).toBe(1);
    });

    userEvent.type(commentField, 'comment');

    await waitFor(() => {
      expect(screen.queryByText(RequiredFieldMessage.Text)).not.toBeInTheDocument();
    });

    ratingVariants.forEach((rating) => expect(screen.getByTestId(`rating-${rating}`)).not.toBeChecked());

    userEvent.click(screen.getByTestId('rating-1'));

    await waitFor(() => {
      expect(screen.getByTestId('rating-1')).toBeChecked();
    });

    await waitFor(() => {
      expect(screen.queryByText(RequiredFieldMessage.Radio)).not.toBeInTheDocument();
    });
  });

  it('Должен вызваться диспатч при успешной отправке отзыва', async () => {
    const store = mockStore({
      ...initialState,
    });

    useDispatchMock.mockReturnValue(store.dispatch);

    render(
      <Provider store={ store }>
        <NewReviewForm guitarId={ GUITAR_ID_MOCK } />,
      </Provider>,
    );

    const userNameField = screen.getByTestId('userName');
    const advantageField = screen.getByTestId('advantage');
    const disadvantageField = screen.getByTestId('disadvantage');
    const commentField = screen.getByTestId('comment');
    const submitButton = screen.getByRole('button', { name: 'Отправить отзыв' });

    userEvent.type(userNameField, 'Name');
    userEvent.type(advantageField, 'advantage');
    userEvent.type(disadvantageField, 'disadvantage');
    userEvent.type(commentField, 'comment');
    userEvent.click(screen.getByTestId('rating-1'));

    const reviewResponse = {
      id: 'a7c267d0-a72d-41bd-8b8e-e7f67800d58a',
      guitarId: GUITAR_ID_MOCK,
      userName: 'Name',
      advantage: 'advantage',
      disadvantage: 'disadvantage',
      comment: 'comment',
      rating: 1,
      createAt: '2021-10-28T12:32:16.934Z',
    };

    mockAPI
      .onPost(APIRoute.Comments)
      .reply(200, reviewResponse);

    expect(store.getState().REVIEWS_DATA?.reviews?.length).toBe(3);

    userEvent.click(submitButton);

    await waitFor(() => {
      const actions = store.getActions().map(({ type }) => type);
      expect(actions).toContain(setOpenModal.toString());
    });

    await waitFor(() => {
      const actions = store.getActions().map(({ type }) => type);
      expect(actions).toContain(addNewReview.toString());
    });
  });
});

