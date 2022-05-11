import { SerializedError } from '@reduxjs/toolkit';
import { store } from '../store/store.js';
import { GuitarDTO } from './guitar.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CatalogData = {
  loading: string,
  guitars: GuitarDTO[],
  currentRequestId: undefined | string,
  error: null | SerializedError,
}
