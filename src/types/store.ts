import { store } from '../store/store.js';
import { ModalType } from '../constants/const.js';
import { GuitarDTO } from './guitar.js';
import { ReviewDTO } from './review.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CatalogData = {
  loading: string,
  guitars: GuitarDTO[],
  totalCount: number,
}

export type ProductData = {
  loading: string,
  guitar: null | GuitarDTO,
}

export type ReviewsData = {
  loading: string,
  reviews: ReviewDTO[],
  totalCount: number,
}

export type StateApp = {
  openedModal: null | ModalType,
}
