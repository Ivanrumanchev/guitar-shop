import { useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import ModalNewReview from '../modal-new-review/modal-new-review';
import ModalReviewSuccess from '../modal-review-success/modal-review-success';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { setOpenModal } from '../../../store/state-app/state-app';
import { openedModalSelector } from '../../../store/selectors';
import { getClassNameModal, getHeightModal } from '../../../utils/modal';
import { ModalType } from '../../../constants/const';

function ModalLayout(): JSX.Element {
  const dispatch = useAppDispatch();

  const modalType = useAppSelector(openedModalSelector);

  const closeModalClickHandler = () => {
    dispatch(setOpenModal(null));
    document.body.style.overflow = 'auto';
  };

  const onKeydown = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') {
      dispatch(setOpenModal(null));
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);

    return () => document.removeEventListener('keydown', onKeydown);
  });

  const isOpened = modalType !== null;
  const hidden = isOpened ? 'block' : 'none';

  const heightModal = getHeightModal(modalType);
  const classNameModal = getClassNameModal(modalType);

  return (
    <div
      style={{
        display: hidden,
        position: 'relative',
        width: '550px',
        height: heightModal,
        marginBottom: '50px',
      }}
      data-testid="modal-layout"
    >
      <div className={ `modal ${isOpened ? 'is-active' : ''} modal-for-ui-kit ${classNameModal}` }>
        <div className="modal__wrapper">
          <FocusLock>
            <div
              className="modal__overlay"
              data-close-modal
              data-testid="overlay"
              onClick={ closeModalClickHandler }
            />

            { modalType === ModalType.Review &&
            <ModalNewReview /> }

            { modalType === ModalType.SuccessReview &&
            <ModalReviewSuccess /> }
          </FocusLock>
        </div>
      </div>
    </div>
  );
}

export default ModalLayout;
