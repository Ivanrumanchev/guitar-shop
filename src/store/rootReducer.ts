import { combineReducers } from '@reduxjs/toolkit';
import { catalogData } from './catalog-data/catalog-data';
import { productData } from './product-data/product-data';
import { reviewsData } from './reviews-data/reviews-data';
import { stateApp } from './state-app/state-app';
import { NameSpace } from '../constants/const';

export const rootReducer = combineReducers({
  [NameSpace.CatalogData]: catalogData.reducer,
  [NameSpace.ProductData]: productData.reducer,
  [NameSpace.ReviewsData]: reviewsData.reducer,
  [NameSpace.StateApp]: stateApp.reducer,
});
