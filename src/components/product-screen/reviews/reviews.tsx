import ReviewItem from '../review-item/review-item';
import LoadingScreen from '../../loading-screen/loading-screen';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { loadingReviewsSelector, reviewsSelector, totalCountReviewsSelector } from '../../../store/selectors';
import { fetchReviewsAction } from '../../../store/api-actions';
import { LoadingStatus, ModalType, REVIEW_PER_STEP } from '../../../const';
import { setOpenModal } from '../../../store/state-app/state-app';

const Z_INDEX_BUTTON = 100;
const scrollTop: ScrollToOptions = {
  top: 0,
  left: 0,
  behavior: 'smooth',
};

function Reviews(): JSX.Element {
  const dispatch = useAppDispatch();

  const reviews = useAppSelector(reviewsSelector);
  const reviewsCount = useAppSelector(totalCountReviewsSelector);
  const isLoading = useAppSelector(loadingReviewsSelector);

  const alreadyShow = reviews.length;
  const isMore = alreadyShow < reviewsCount;

  const showMoreClickHandler = () => {
    dispatch(fetchReviewsAction({
      start: alreadyShow,
      end: alreadyShow + REVIEW_PER_STEP,
      id: reviews[0].guitarId,
    }));
  };

  const openModalClickHandler = () => {
    dispatch(setOpenModal(ModalType.Review));
  };

  const scrollUpClickHandler = () => {
    window.scrollTo(scrollTop);
  };

  if (isLoading === LoadingStatus.Pending) {
    return <LoadingScreen />;
  }

  return (
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">
        Отзывы
      </h3>

      <button
        className="button button--red-border button--big reviews__sumbit-button"
        onClick={ openModalClickHandler }
      >
        Оставить отзыв
      </button>

      { reviewsCount !== 0
        ? reviews.map((review) => (
          <ReviewItem review={ review } key={ review.id } />
        ))
        : 'Здесь ещё никто не оставил ни одного отзыва' }

      { isMore &&
      <button
        className="button button--medium reviews__more-button"
        onClick={ showMoreClickHandler }
      >
        Показать еще отзывы
      </button> }

      <button
        className="button button--up button--red-border button--big reviews__up-button"
        style={ {zIndex: Z_INDEX_BUTTON} }
        onClick={ scrollUpClickHandler }
      >
        Наверх
      </button>
    </section>
  );
}

export default Reviews;
