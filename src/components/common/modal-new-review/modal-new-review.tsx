import NewReviewForm from '../../product-screen/new-review-form/new-review-form';
import LoadingScreen from '../../loading-screen/loading-screen';
import ModalCloseButton from '../modal-close-button/modal-close-button';
import { useAppSelector } from '../../../hooks/store';
import { productSelector } from '../../../store/selectors';

function ModalNewReview(): JSX.Element {
  const guitar = useAppSelector(productSelector);

  if (guitar === null) {
    return <LoadingScreen />;
  }

  return (
    <div className="modal__content">
      <h2 className="modal__header modal__header--review title title--medium">
        Оставить отзыв
      </h2>

      <h3 className="modal__product-name title title--medium-20 title--uppercase">
        { guitar.name }
      </h3>

      <NewReviewForm
        guitarId={ guitar.id }
      />

      <ModalCloseButton />
    </div>
  );
}

export default ModalNewReview;
