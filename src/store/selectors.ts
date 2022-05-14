import { NameSpace } from '../const';
import { State } from '../types/store';

export const guitarsSelector = (state: State) => state[NameSpace.CatalogData].guitars;
export const loadingGuitarsSelector = (state: State) => state[NameSpace.CatalogData].loading;
