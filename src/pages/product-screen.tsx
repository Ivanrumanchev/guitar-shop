import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/common/breadcrumbs/breadcrumbs';
import Reviews from '../components/product-screen/reviews/reviews';
import LoadingScreen from '../components/loading-screen/loading-screen';
import ProductCard from '../components/product-screen/product-card/product-card';
import NotFoundScreen from '../components/not-found-screen/not-found-screen';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { fetchProductAction, fetchReviewsAction } from '../store/api-actions';
import { loadingProductSelector, productSelector } from '../store/selectors';
import { clearReviews } from '../store/reviews-data/reviews-data';
import { clearProduct } from '../store/product-data/product-data';
import { AppRoute, BroadcrumbsName, LoadingStatus, DEFAULT_PAGE, INITIAL_NUMBER_REVIEW, REVIEW_PER_STEP } from '../const';

function ProductScreen(): JSX.Element {
  const [notFound, setNotFound] = useState(false);

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(loadingProductSelector);

  const params = useParams();
  const guitarId = params.id ? +params.id : DEFAULT_PAGE;

  useEffect(() => {
    dispatch(fetchProductAction(guitarId))
      .then((res) => setNotFound(fetchProductAction.rejected.match(res)));

    return () => {
      dispatch(clearProduct());
    };
  }, [dispatch, guitarId]);

  useEffect(() => {
    dispatch(fetchReviewsAction({start: INITIAL_NUMBER_REVIEW, end: REVIEW_PER_STEP, id: guitarId}));

    return () => {
      dispatch(clearReviews());
    };
  }, [dispatch, guitarId]);

  const guitar = useAppSelector(productSelector);

  if (notFound) {
    return <NotFoundScreen />;
  }

  if (isLoading === LoadingStatus.Pending || guitar === null) {
    return <LoadingScreen />;
  }

  const { name, id } = guitar;

  const guitarName = name ? name : BroadcrumbsName.Product;

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

  return (
    <div className="container">
      <h1 className="page-content__title title title--bigger">
        { guitarName }
      </h1>

      <Breadcrumbs breadcrumbs={ breadcrumbs } />

      <ProductCard guitar={ guitar } />

      <Reviews guitarId={ id } />
    </div>
  );
}

export default ProductScreen;
