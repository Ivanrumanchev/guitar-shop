import { Link } from 'react-router-dom';
import Rate from '../../common/rate/rate';
import { getNumberImage, getPrice } from '../../../utils/common';
import { AppRoute } from '../../../constants/const';
import { GuitarDTO } from '../../../types/guitar';

type CardItemProps = {
  guitar: GuitarDTO,
};

function CardItem({ guitar }: CardItemProps): JSX.Element {
  const numberImage = getNumberImage(guitar);
  const price = getPrice(guitar);

  const rateDescription = {
    className: 'product-card__rate',
    width: '12',
    height: '11',
  };

  const { name: guitarName, rating, id } = guitar;

  return (
    <div className="product-card">
      <img
        src={ `img/content/catalog-product-${numberImage}.jpg` }
        srcSet={ `img/content/catalog-product-${numberImage}@2x.jpg 2x` }
        width="75"
        height="190"
        alt={ guitarName }
      />

      <div className="product-card__info">
        <Rate
          rating={ rating }
          reviewsCount={ guitar.comments?.length }
          rateDescription={ rateDescription }
        />

        <p className="product-card__title">
          { guitarName }
        </p>

        <p className="product-card__price">
          <span className="visually-hidden">
            Цена:
          </span>

          { price && `${price} ₽` }
        </p>
      </div>

      <div className="product-card__buttons">
        <Link
          className="button button--mini"
          to={ `${AppRoute.Product}/${id}` }
        >
          Подробнее
        </Link>

        <a
          className="button button--red button--mini button--add-to-cart"
          href="/"
        >
          Купить
        </a>
      </div>
    </div>
  );
}

export default CardItem;
