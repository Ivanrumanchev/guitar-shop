import Rate from '../../../components/common/rate/rate';
import Tabs from '../../../components/product-screen/tabs/tabs';
import { useAppSelector } from '../../../hooks/store';
import { totalCountReviewsSelector } from '../../../store/selectors';
import { getNumberImage, getPrice } from '../../../utils/common';
import { BroadcrumbsName } from '../../../constants/const';
import { GuitarDTO } from '../../../types/guitar';

type ProductCardProps = {
  guitar: GuitarDTO;
}

function ProductCard({ guitar }: ProductCardProps): JSX.Element {
  const { name, rating } = guitar;

  const guitarName = name ? name : BroadcrumbsName.Product;

  const price = getPrice(guitar);

  const numberImage = getNumberImage(guitar);

  const reviewsCount = useAppSelector(totalCountReviewsSelector);

  const rateDescription = {
    className: 'product-container__rating',
    width: '14',
    height: '14',
  };

  return (
    <div className="product-container">
      <img
        className="product-container__img"
        src={ `img/content/catalog-product-${numberImage}.jpg` }
        srcSet={ `img/content/catalog-product-${numberImage}@2x.jpg 2x` }
        width="90"
        height="235"
        alt={ guitarName }
      />

      <div className="product-container__info-wrapper">
        <h2 className="product-container__title title title--big title--uppercase">
          { guitarName }
        </h2>

        <Rate
          rating={ rating }
          reviewsCount={ reviewsCount }
          rateDescription={ rateDescription }
        />

        <Tabs guitar={ guitar } />
      </div>

      <div className="product-container__price-wrapper">
        <p className="product-container__price-info product-container__price-info--title">
          Цена:
        </p>

        <p className="product-container__price-info product-container__price-info--value">
          { price ? `${price} ₽` : '' }
        </p>

        <a
          className="button button--red button--big product-container__button"
          href="/"
        >
          Добавить в корзину
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
