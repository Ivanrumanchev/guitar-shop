import { Rating } from '../../../const';

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

function Rate({ rating, reviewsCount: stringCount, rateDescription }: RateProps): JSX.Element {
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
            <use xlinkHref={ `${isFull ? '#icon-full-star' : '#icon-star'}` }/>
          </svg>
        );
      }) }

      <p className="visually-hidden">
        Рейтинг: { ratingWord }
      </p>

      { Boolean(stringCount) &&
      <p className="rate__count">
        <span className="visually-hidden">
          Всего оценок:
        </span>

        { stringCount }
      </p> }
    </div>
  );
}

export default Rate;
