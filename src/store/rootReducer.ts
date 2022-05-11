import { combineReducers } from '@reduxjs/toolkit';
import { catalogData } from './catalog-data/catalog-data';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.CatalogData]: catalogData.reducer,
});

export type RootState = ReturnType<typeof rootReducer>
