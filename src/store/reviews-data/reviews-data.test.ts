import { LoadingStatus } from '../../const';
import { makeFakeReviewData, makeFakeReviewsData } from '../../utils/mocks';
import { addNewReview, clearReviews, fetchReviews, reviewsData, setReviewsLoading, setTotalReviewsCount } from './reviews-data';

const mockReviewData = makeFakeReviewData();
const mockReviewsData = makeFakeReviewsData();

describe('Reducer: reviewsData', () => {
  it('Без начальных параметров должен вернуть начальное состояние', () => {
    expect(reviewsData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        loading: LoadingStatus.Idle,
        reviews: [],
        totalCount: 0,
      });
  });

  it('Должен записать комментарии в стейт', () => {
    const state = {
      loading: LoadingStatus.Idle,
      reviews: [],
      totalCount: 0,
    };

    expect(reviewsData.reducer(state, fetchReviews(mockReviewsData)))
      .toEqual({
        loading: LoadingStatus.Idle,
        reviews: mockReviewsData,
        totalCount: 0,
      });
  });

  it('Должен установить статус загрузки в стейт', () => {
    const state = {
      loading: LoadingStatus.Idle,
      reviews: [],
      totalCount: 0,
    };

    expect(reviewsData.reducer(state, setReviewsLoading(LoadingStatus.Pending)))
      .toEqual({
        loading: LoadingStatus.Pending,
        reviews: [],
        totalCount: 0,
      });
  });

  it('Должен установить кол-во комментов в стейт', () => {
    const state = {
      loading: LoadingStatus.Idle,
      reviews: [],
      totalCount: 0,
    };

    expect(reviewsData.reducer(state, setTotalReviewsCount(5)))
      .toEqual({
        loading: LoadingStatus.Idle,
        reviews: [],
        totalCount: 5,
      });
  });

  it('Должен удалить все комменты из стейта', () => {
    const state = {
      loading: LoadingStatus.Idle,
      reviews: mockReviewsData,
      totalCount: 0,
    };

    expect(reviewsData.reducer(state, clearReviews()))
      .toEqual({
        loading: LoadingStatus.Idle,
        reviews: [],
        totalCount: 0,
      });
  });

  it('Должен записать новый комментарий в стейт', () => {
    const state = {
      loading: LoadingStatus.Idle,
      reviews: mockReviewsData,
      totalCount: 0,
    };

    expect(reviewsData.reducer(state, addNewReview(mockReviewData)))
      .toEqual({
        loading: LoadingStatus.Idle,
        reviews: [mockReviewData, ...mockReviewsData],
        totalCount: 0,
      });
  });
});
