import { render, screen } from '@testing-library/react';
import { Rating } from '../../../constants/const';
import Rate from './rate';

describe('Component: Rate', () => {
  it('Должен быть корректный рендер', () => {
    let reviewsCount: undefined | number = 4;
    const rating = 5;
    const rateDescription = {
      className: 'product-container__rating',
      width: '14',
      height: '14',
    };

    const { rerender } = render(
      <Rate rating={ rating } reviewsCount={ reviewsCount } rateDescription={ rateDescription }/>,
    );

    expect(screen.getByText(/Всего оценок:/)).toBeInTheDocument();
    expect(screen.getByText(reviewsCount)).toBeInTheDocument();

    reviewsCount = undefined;

    rerender(
      <Rate rating={ rating } reviewsCount={ reviewsCount } rateDescription={ rateDescription }/>,
    );

    expect(screen.queryByText(/Всего оценок:/)).not.toBeInTheDocument();
  });

  it('Должно отображаться правильное кол-во закрашенных звёзд', () => {
    let rating = 5;
    const reviewsCount = 4;
    const rateDescription = {
      className: 'product-container__rating',
      width: '14',
      height: '14',
    };

    const { rerender } = render(
      <Rate rating={ rating } reviewsCount={ reviewsCount } rateDescription={ rateDescription }/>,
    );

    const ratingVariants = Object.values(Rating).filter((value) => typeof value === 'number');

    ratingVariants.forEach((rate) => {
      rating = Number(rate);

      rerender(
        <Rate rating={ rating } reviewsCount={ reviewsCount } rateDescription={ rateDescription }/>,
      );

      const fullStarElements = screen.getAllByTestId('full-star');

      expect(fullStarElements.length).toBe(rating);
    });
  });
});
