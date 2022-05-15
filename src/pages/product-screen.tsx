import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/common/breadcrumbs/breadcrumbs';
import Rate from '../components/common/rate/rate';
import Reviews from '../components/product-screen/reviews/reviews';
import LoadingScreen from '../components/loading-screen/loading-screen';
import Tabs from '../components/product-screen/tabs/tabs';
import NotFoundScreen from '../components/not-found-screen/not-found-screen';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { fetchProductAction } from '../store/api-actions';
import { loadingProductSelector, productSelector } from '../store/selectors';
import { getNumberImage, getPrice } from '../utils/common';
import { AppRoute, BroadcrumbsName, LoadingStatus, DEFAULT_PAGE } from '../const';

function ProductScreen(): JSX.Element {
  const [notFound, setNotFound] = useState(false);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(loadingProductSelector);

  const params = useParams();
  const guitarId = params.id ? +params.id : DEFAULT_PAGE;

  useEffect(() => {
    dispatch(fetchProductAction(guitarId))
      .then((res) => setNotFound(fetchProductAction.rejected.match(res)));
  }, [dispatch, guitarId]);

  const guitar = useAppSelector(productSelector);

  if (notFound) {
    return <NotFoundScreen />;
  }

  if (isLoading === LoadingStatus.Pending || guitar === null) {
    return <LoadingScreen />;
  }

  const { name, rating } = guitar;

  const guitarName = name ? name : BroadcrumbsName.Product;

  const price = getPrice(guitar);

  const numberImage = getNumberImage(guitar);

  const breadcrumbs = [
    {
      name: BroadcrumbsName.Main,
      url: AppRoute.Root,
    },
    {
      name: BroadcrumbsName.Catalog,
      url: AppRoute.Catalog,
    },
    {
      name: guitarName,
      url: AppRoute.Product,
    },
  ];

  const rateDescription = {
    className: 'product-container__rating',
    width: '14',
    height: '14',
  };

  return (
    <div className="container">
      <h1 className="page-content__title title title--bigger">
        { guitarName }
      </h1>

      <Breadcrumbs breadcrumbs={ breadcrumbs } />

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

      <Reviews />
    </div>
  );
}

export default ProductScreen;
