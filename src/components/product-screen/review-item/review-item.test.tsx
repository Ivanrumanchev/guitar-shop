import { render, screen } from '@testing-library/react';
import ReviewItem from './review-item';
import { makeFakeReviewData } from '../../../utils/mocks';

describe('Component: ReviewItem', () => {
  const reviewProps = {
    review: makeFakeReviewData(),
  };

  it('Должен быть корректный рендер', () => {
    render(
      <ReviewItem
        review={ reviewProps.review }
      />,
    );

    expect(screen.getByText(reviewProps.review.userName)).toBeInTheDocument();
    expect(screen.getByText(/Достоинства/)).toBeInTheDocument();
    expect(screen.getByText(/Недостатки/)).toBeInTheDocument();
    expect(screen.getByText(/Комментарий/)).toBeInTheDocument();
    expect(screen.getByText(reviewProps.review.comment)).toBeInTheDocument();
  });
});
