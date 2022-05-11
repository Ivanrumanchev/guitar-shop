export enum AppRoute {
  Root = '/',
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
