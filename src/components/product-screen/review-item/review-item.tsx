import Rate from '../../common/rate/rate';
import { getFormattedDate } from '../../../utils/common';
import { ReviewDTO } from '../../../types/review';

type ReviewItemProps = {
  review: ReviewDTO;
}

function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const rateDescription = {
    className: 'review__rating-panel',
    width: '16',
    height: '16',
  };

  const { userName, advantage, disadvantage, comment, createAt } = review;

  const createdDate = getFormattedDate(createAt);

  return (
    <div className="review">
      <div className="review__wrapper">
        <h4 className="review__title review__title--author title title--lesser">
          { userName }
        </h4>

        <span className="review__date">
          { createdDate }
        </span>
      </div>

      <Rate
        rating={ review.rating }
        rateDescription={ rateDescription }
      />

      <h4 className="review__title title title--lesser">
        Достоинства:
      </h4>

      <p className="review__value">
        { advantage }
      </p>

      <h4 className="review__title title title--lesser">
        Недостатки:
      </h4>

      <p className="review__value">
        { disadvantage }
      </p>

      <h4 className="review__title title title--lesser">
        Комментарий:
      </h4>

      <p className="review__value">
        { comment }
      </p>
    </div>
  );
}

export default ReviewItem;
