import { getNumberImage } from '../../../utils/common';
import { Rating } from '../../../const';
import { GuitarDTO } from '../../../types/guitar';

type CardItemProps = {
  guitar: GuitarDTO,
};

function CardItem({ guitar }: CardItemProps): JSX.Element {
  const numberImage = getNumberImage(guitar);

  const ratingVariants = Object.values(Rating).filter((value) => typeof value === 'number');

  const ratingWord = Rating[guitar.rating] ? Rating[guitar.rating] : guitar.rating;

  return (
    <div className="product-card">
      <img
        src={ `img/content/catalog-product-${numberImage}.jpg` }
        srcSet={ `img/content/catalog-product-${numberImage}@2x.jpg 2x` }
        width="75"
        height="190"
        alt={ guitar.name }
      />

      <div className="product-card__info">
        <div className="rate product-card__rate">
          { ratingVariants.map((rate) => {
            const isFull = rate <= guitar.rating;

            return (
              <svg
                width="12"
                height="11"
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

          <p className="rate__count">
            <span className="visually-hidden">
              Всего оценок:
            </span>

            { guitar.stringCount }
          </p>
        </div>

        <p className="product-card__title">
          { guitar.name }
        </p>

        <p className="product-card__price">
          <span className="visually-hidden">
            Цена:
          </span>

          { guitar.price.toLocaleString('ru') }
        </p>
      </div>

      <div className="product-card__buttons">
        <a
          className="button button--mini"
          href="/"
        >
          Подробнее
        </a>

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
