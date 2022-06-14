import { catalogData, fetchGuitars, setCatalogLoading, setTotalGuitarsCount } from '../../store/catalog-data/catalog-data';
import { makeFakeCatalogData } from '../../utils/mocks';
import { LoadingStatus } from '../../const';

const mockCatalogData = makeFakeCatalogData();

describe('Reducer: catalogData', () => {
  it('Без начальных параметров должен вернуть начальное состояние', () => {
    expect(catalogData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        loading: LoadingStatus.Idle,
        guitars: [],
        totalCount: 0,
      });
  });

  it('Должен записать гитары в стейт', () => {
    const state = {
      loading: LoadingStatus.Idle,
      guitars: [],
      totalCount: 0,
    };

    expect(catalogData.reducer(state, fetchGuitars(mockCatalogData)))
      .toEqual({
        loading: LoadingStatus.Idle,
        guitars: mockCatalogData,
        totalCount: 0,
      });
  });

  it('Должен установить статус загрузки в стейт', () => {
    const state = {
      loading: LoadingStatus.Idle,
      guitars: [],
      totalCount: 0,
    };

    expect(catalogData.reducer(state, setCatalogLoading(LoadingStatus.Pending)))
      .toEqual({
        loading: LoadingStatus.Pending,
        guitars: [],
        totalCount: 0,
      });
  });

  it('Должен установить кол-во гитар в стейт', () => {
    const state = {
      loading: LoadingStatus.Idle,
      guitars: [],
      totalCount: 0,
    };

    expect(catalogData.reducer(state, setTotalGuitarsCount(5)))
      .toEqual({
        loading: LoadingStatus.Idle,
        guitars: [],
        totalCount: 5,
      });
  });
});
