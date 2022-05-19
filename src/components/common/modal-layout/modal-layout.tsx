import { useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import ModalNewReview from '../modal-new-review/modal-new-review';
import ModalReviewSuccess from '../modal-review-success/modal-review-success';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { setOpenModal } from '../../../store/state-app/state-app';
import { openedModalSelector } from '../../../store/selectors';
import { getClassNameModal, getHeightModal } from '../../../utils/modal';
import { ModalType } from '../../../const';

function ModalLayout(): JSX.Element {
  const dispatch = useAppDispatch();

  const modalType = useAppSelector(openedModalSelector);

  const closeModalClickHandler = () => {
    dispatch(setOpenModal(null));
  };

  const onKeydown = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') {
      dispatch(setOpenModal(null));
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);

    return () => document.removeEventListener('keydown', onKeydown);
  });

  const isOpened = modalType !== null;

  const heightModal = getHeightModal(modalType);
  const classNameModal = getClassNameModal(modalType);

  return (
    <div
      style={{
        position: 'relative',
        width: '550px',
        height: heightModal,
        marginBottom: '50px',
      }}
    >
      <div className={ `modal ${isOpened ? 'is-active' : ''} modal-for-ui-kit ${classNameModal}` }>
        <FocusLock>
          <div className="modal__wrapper">
            <div
              className="modal__overlay"
              data-close-modal
              onClick={ closeModalClickHandler }
            />

            { modalType === ModalType.Review &&
            <ModalNewReview /> }

            { modalType === ModalType.SuccessReview &&
            <ModalReviewSuccess /> }
          </div>
        </FocusLock>
      </div>
    </div>
  );
}

export default ModalLayout;
