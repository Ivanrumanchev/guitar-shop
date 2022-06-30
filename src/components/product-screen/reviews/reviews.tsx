import { useCallback, useEffect, useRef } from 'react';
import ReviewItem from '../review-item/review-item';
import LoadingScreen from '../../loading-screen/loading-screen';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { loadingReviewsSelector, reviewsSelector, totalCountReviewsSelector } from '../../../store/selectors';
import { fetchReviewsAction } from '../../../store/api-actions';
import { setOpenModal } from '../../../store/state-app/state-app';
import { getScrollToBottom } from '../../../utils/common';
import { LoadingStatus, ModalType, REVIEW_PER_STEP, SCROLL_LOADING_REVIEW } from '../../../constants/const';

type ReviewsProps = {
  guitarId: number,
}

const Z_INDEX_BUTTON = 100;
const scrollTop: ScrollToOptions = {
  top: 0,
  left: 0,
  behavior: 'smooth',
};

function Reviews({ guitarId }: ReviewsProps): JSX.Element {
  const isFetching = useRef(false);

  const dispatch = useAppDispatch();

  const reviews = useAppSelector(reviewsSelector);
  const reviewsCount = useAppSelector(totalCountReviewsSelector);
  const isLoading = useAppSelector(loadingReviewsSelector);

  const alreadyShow = reviews.length;
  const isMore = alreadyShow < reviewsCount;

  const showMoreClickHandler = useCallback(() => {
    dispatch(fetchReviewsAction({
      start: alreadyShow,
      end: alreadyShow + REVIEW_PER_STEP,
      id: guitarId,
    }));
  }, [alreadyShow, dispatch, guitarId]);

  const openModalClickHandler = () => {
    dispatch(setOpenModal(ModalType.Review));
    document.body.style.overflow = 'hidden';
  };

  const scrollUpClickHandler = () => {
    window.scrollTo(scrollTop);
  };

  const scrollHandler = useCallback(() => {
    const scrollToBottom = getScrollToBottom();

    if (scrollToBottom < SCROLL_LOADING_REVIEW && isMore && !isFetching.current) {
      isFetching.current = true;

      dispatch(fetchReviewsAction({
        start: alreadyShow,
        end: alreadyShow + REVIEW_PER_STEP,
        id: guitarId,
      }))
        .then(() => isFetching.current = false);
    }
  }, [alreadyShow, dispatch, guitarId, isMore]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  const isNotEmpty = reviewsCount !== 0;

  if (isLoading === LoadingStatus.Pending && !isNotEmpty) {
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

      { isNotEmpty
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
