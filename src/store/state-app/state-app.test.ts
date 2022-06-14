import { ModalType } from '../../const';
import { setOpenModal, stateApp } from './state-app';

describe('Reducer: stateApp', () => {
  it('Без начальных параметров должен вернуть начальное состояние', () => {
    expect(stateApp.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        openedModal: null,
      });
  });

  it('Должен записать тип модального окна в стейт', () => {
    const state = {
      openedModal: null,
    };

    expect(stateApp.reducer(state, setOpenModal(ModalType.SuccessReview)))
      .toEqual({
        openedModal: ModalType.SuccessReview,
      });
  });
});
