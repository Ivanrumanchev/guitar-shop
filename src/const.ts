export enum AppRoute {
  Root = '/',
  Catalog = 'catalog',
  CatalogPage = 'catalog/:page',
}

export enum Rating {
  'Ужасно' = 1,
  'Плохо',
  'Средне',
  'Хорошо',
  'Отлично',
}

export enum NameSpace {
  CatalogData = 'CATALOG_DATA',
}

export enum LoadingStatus {
  Pending = 'pending',
  Idle = 'idle',
}

export enum ApiActions {
  FetchCatalog = 'data/fetchOffers',
}

export enum APIRoute {
  Catalog = '/guitars',
}

export enum HttpCode {
  BadRequest = 400,
  NotFound = 404,
}

export const CARDS_PER_PAGE = 9;

export const DEFAULT_PAGE = 1;
