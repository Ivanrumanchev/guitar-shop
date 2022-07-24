export const enum AppRoute {
  Root = '/',
  Catalog = '/catalog',
  CatalogPage = '/catalog/:page',
  Product = '/product',
  ProductId = '/product/:id',
}

export enum Rating {
  'Ужасно' = 1,
  'Плохо',
  'Нормально',
  'Хорошо',
  'Отлично',
}

export const enum NameSpace {
  CatalogData = 'CATALOG_DATA',
  ProductData = 'PRODUCT_DATA',
  ReviewsData = 'REVIEWS_DATA',
  StateApp = 'STATE_APP',
}

export const enum LoadingStatus {
  Pending = 'pending',
  Idle = 'idle',
}

export const enum ApiActions {
  FetchCatalog = 'data/fetchGuitars',
  FetchProduct = 'data/fetchProduct',
  FetchReviews = 'data/fetchReviews',
  FetchTotalCountReviews = 'data/fetchTotalCountReviews',
  PostReview = 'data/postReview',
  FetchSearchingGuitar = 'data/fetchSearchingGuitars',
}

export const enum APIRoute {
  Catalog = '/guitars',
  Comments = '/comments',
}

export const enum HttpCode {
  BadRequest = 400,
  NotFound = 404,
}

export const CARDS_PER_PAGE = 9;

export const DEFAULT_PAGE = 1;

export const enum BroadcrumbsName {
  Main = 'Главная',
  Catalog = 'Каталог',
  Product = 'Товар',
}

export enum GuitarType {
  Acoustic = 'Акустическая гитара',
  Electric = 'Электрогитара',
  Ukulele = 'Укулеле',
}

export const enum GuitarTypeName {
  Acoustic = 'acoustic',
  Electric = 'electric',
  Ukulele = 'ukulele',
}

export enum StringVariants {
  FourStrings = '4-strings',
  SixStrings = '6-strings',
  SevenStrings = '7-strings',
  TwelveStrings = '12-strings',
}

export const REVIEW_PER_STEP = 3;

export const INITIAL_NUMBER_REVIEW = 0;

export const SCROLL_LOADING_REVIEW = 100;

export const enum ModalType {
  SuccessReview = 'SUCCESS',
  Review = 'REVIEW',
}

export const enum RequiredFieldMessage {
  Text = 'Заполните поле',
  Radio = 'Поставьте оценку',
}

export const DEBOUNCE_DELAY = 300;
