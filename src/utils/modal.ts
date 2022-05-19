import { ModalType } from '../const';

export const getHeightModal = (type: ModalType | null) => {
  switch (type) {
    case ModalType.Review: return '610px';
    case ModalType.SuccessReview: return '410px';
    default: return '0';
  }
};

export const getClassNameModal = (type: ModalType | null) => {
  switch (type) {
    case ModalType.Review: return 'modal--review';
    case ModalType.SuccessReview: return 'modal--success';
    default: return '';
  }
};
