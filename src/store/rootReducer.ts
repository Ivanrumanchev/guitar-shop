import { combineReducers } from '@reduxjs/toolkit';
import { catalogData } from './catalog-data/catalog-data';
import { productData } from './product-data/product-data';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.CatalogData]: catalogData.reducer,
  [NameSpace.ProductData]: productData.reducer,
});

export type RootState = ReturnType<typeof rootReducer>
