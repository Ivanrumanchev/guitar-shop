import ModalCloseButton from '../modal-close-button/modal-close-button';
import { useAppDispatch } from '../../../hooks/store';
import { setOpenModal } from '../../../store/state-app/state-app';

function ModalReviewSuccess(): JSX.Element {
  const dispatch = useAppDispatch();

  const closeModalClickHandler = () => {
    dispatch(setOpenModal(null));
  };

  return (
    <div className="modal__content">
      <svg
        className="modal__icon"
        width="26"
        height="20"
        aria-hidden="true"
      >
        <use xlinkHref="#icon-success"></use>
      </svg>

      <p className="modal__message">
        Спасибо за ваш отзыв!
      </p>

      <div className="modal__button-container modal__button-container--review">
        <button
          className="button button--small modal__button modal__button--review"
          onClick={ closeModalClickHandler }
        >
          К покупкам!
        </button>
      </div>

      <ModalCloseButton />
    </div>
  );
}

export default ModalReviewSuccess;
