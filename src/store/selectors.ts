import { NameSpace } from '../const';
import { State } from '../types/store';

export const guitarsSelector = (state: State) => state[NameSpace.CatalogData].guitars;
export const totalCountGuitarsSelector = (state: State) => state[NameSpace.CatalogData].totalCount;
export const loadingGuitarsSelector = (state: State) => state[NameSpace.CatalogData].loading;

export const productSelector = (state: State) => state[NameSpace.ProductData].guitar;
export const loadingProductSelector = (state: State) => state[NameSpace.ProductData].loading;

export const reviewsSelector = (state: State) => state[NameSpace.ReviewsData].reviews;
export const totalCountReviewsSelector = (state: State) => state[NameSpace.ReviewsData].totalCount;
export const loadingReviewsSelector = (state: State) => state[NameSpace.ReviewsData].loading;

export const openedModalSelector = (state: State) => state[NameSpace.StateApp].openedModal;
