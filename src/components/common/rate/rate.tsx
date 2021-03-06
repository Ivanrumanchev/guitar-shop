import { Rating } from '../../../constants/const';

type RateDescription = {
  className: string,
  width: string,
  height: string,
}

type RateProps = {
  rating: number,
  rateDescription: RateDescription,
  reviewsCount?: number,
};

function Rate({ rating, reviewsCount, rateDescription }: RateProps): JSX.Element {
  const ratingVariants = Object.values(Rating).filter((value) => typeof value === 'number');

  const ratingWord = Rating[rating] ? Rating[rating] : rating;

  return (
    <div className={ `rate ${rateDescription.className}` }>
      { ratingVariants.map((rate) => {
        const isFull = rate <= rating;

        return (
          <svg
            width={ rateDescription.width }
            height={ rateDescription.height }
            aria-hidden="true"
            key={ rate }
          >
            <use
              xlinkHref={ `${isFull ? '#icon-full-star' : '#icon-star'}` }
              data-testid={ `${isFull ? 'full-star' : 'icon-star'}` }
            />
          </svg>
        );
      }) }

      <p className="visually-hidden">
        Рейтинг: { ratingWord }
      </p>

      { Boolean(reviewsCount) &&
      <p className="rate__count">
        <span className="visually-hidden">
          Всего оценок:
        </span>

        { reviewsCount }
      </p> }
    </div>
  );
}

export default Rate;
