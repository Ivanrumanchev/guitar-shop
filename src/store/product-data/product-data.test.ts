import { clearProduct, fetchProduct, setProductLoading } from '../../store/product-data/product-data';
import { productData } from './product-data';
import { makeFakeProductData } from '../../utils/mocks';
import { LoadingStatus } from '../../const';

const mockProductData = makeFakeProductData();

describe('Reducer: productData', () => {
  it('Без начальных параметров должен вернуть начальное состояние', () => {
    expect(productData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        loading: LoadingStatus.Idle,
        guitar: null,
      });
  });

  it('Должен записать гитару в стейт', () => {
    const state = {
      loading: LoadingStatus.Idle,
      guitar: null,
    };

    expect(productData.reducer(state, fetchProduct(mockProductData)))
      .toEqual({
        loading: LoadingStatus.Idle,
        guitar: mockProductData,
      });
  });

  it('Должен установить статус загрузки в стейт', () => {
    const state = {
      loading: LoadingStatus.Idle,
      guitar: null,
    };

    expect(productData.reducer(state, setProductLoading(LoadingStatus.Pending)))
      .toEqual({
        loading: LoadingStatus.Pending,
        guitar: null,
      });
  });

  it('Должен удалить гитару из стейта', () => {
    const state = {
      loading: LoadingStatus.Idle,
      guitar: mockProductData,
    };

    expect(productData.reducer(state, clearProduct()))
      .toEqual({
        loading: LoadingStatus.Idle,
        guitar: null,
      });
  });
});
