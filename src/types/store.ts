import { store } from '../store/store.js';
import { GuitarDTO } from './guitar.js';

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
