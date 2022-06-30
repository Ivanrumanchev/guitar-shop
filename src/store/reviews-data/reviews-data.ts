import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, LoadingStatus } from '../../constants/const';
import { ReviewsData } from '../../types/store';

const initialState: ReviewsData = {
  loading: LoadingStatus.Idle,
  reviews: [],
  totalCount: 0,
};

export const reviewsData = createSlice({
  name: NameSpace.ReviewsData,
  initialState,
  reducers: {
    fetchReviews(state, action) {
      state.reviews.push(...action.payload);
    },
    setReviewsLoading(state, action) {
      state.loading = action.payload;
    },
    setTotalReviewsCount(state, action) {
      state.totalCount = action.payload;
    },
    clearReviews(state) {
      state.reviews = [];
    },
    addNewReview(state, action) {
      state.reviews.unshift(action.payload);
    },
  },
});

export const { fetchReviews, setReviewsLoading, setTotalReviewsCount, clearReviews, addNewReview } = reviewsData.actions;
