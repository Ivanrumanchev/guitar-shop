import { useAppDispatch } from '../../../hooks/store';
import { setOpenModal } from '../../../store/state-app/state-app';

function ModalCloseButton(): JSX.Element {
  const dispatch = useAppDispatch();

  const closeModalClickHandler = () => {
    dispatch(setOpenModal(null));
  };

  return (
    <button
      className="modal__close-btn button-cross"
      type="button"
      aria-label="Закрыть"
      onClick={ closeModalClickHandler }
    >
      <span className="button-cross__icon" />

      <span className="modal__close-btn-interactive-area" />
    </button>
  );
}

export default ModalCloseButton;
