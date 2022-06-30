import * as Redux from 'react-redux';
import { Provider } from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalCloseButton from './modal-close-button';
import { createAPI } from '../../../services/api';
import { NameSpace } from '../../../constants/const';
import { State } from '../../../types/store';

describe('Component: ModalCloseButton', () => {
  const api = createAPI();
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  const store = mockStore();

  it('Должен быть корректный рендер', () => {
    render(
      <Provider store={ store }>
        <ModalCloseButton />,
      </Provider>,
    );

    const buttonElement = screen.getByRole('button');

    expect(screen.getByLabelText(/Закрыть/)).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('Должен закрывать модальное окно при нажатии на кнопку', () => {
    const dispatch = jest.fn();

    const useDispatch = jest.spyOn(Redux, 'useDispatch');
    useDispatch.mockReturnValue(dispatch);

    render(
      <Provider store={ store }>
        <ModalCloseButton />,
      </Provider>,
    );

    userEvent.click(screen.getByRole('button'));

    expect(useDispatch).toBeCalledTimes(1);
    expect(dispatch).nthCalledWith(1, {
      payload: null,
      type: `${NameSpace.StateApp}/setOpenModal`,
    });
  });
});

