import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/common/breadcrumbs/breadcrumbs';
import Filter from '../components/catalog-screen/filter/filter';
import Sort from '../components/catalog-screen/sort/sort';
import CardsList from '../components/catalog-screen/cards-list/cards-list';
import Pagination from '../components/catalog-screen/pagination/pagination';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { fetchGuitarsAction } from '../store/api-actions';
import { guitarsSelector, totalCountGuitarsSelector } from '../store/selectors';
import { AppRoute, BroadcrumbsName, CARDS_PER_PAGE, DEFAULT_PAGE } from '../const';

function CatalogScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  const params = useParams();
  const currentPage = params.page ? +params.page : DEFAULT_PAGE;

  const currentGuitars = useAppSelector(guitarsSelector);
  const totalCount = useAppSelector(totalCountGuitarsSelector);

  const lastGuitarIndex = currentPage * CARDS_PER_PAGE;
  const firstGuitarIndex = lastGuitarIndex - CARDS_PER_PAGE;

  useEffect(() => {
    dispatch(fetchGuitarsAction({start: firstGuitarIndex, end: lastGuitarIndex}));
  }, [dispatch, firstGuitarIndex, lastGuitarIndex]);

  const breadcrumbs = [
    {
      name: BroadcrumbsName.Main,
      url: AppRoute.Root,
    },
    {
      name: BroadcrumbsName.Catalog,
      url: AppRoute.Catalog,
    },
  ];

  return (
    <div className="container">
      <h1 className="page-content__title title title--bigger">
        Каталог гитар
      </h1>

      <Breadcrumbs breadcrumbs={ breadcrumbs } />

      <div className="catalog">
        <Filter />

        <Sort />

        <CardsList guitars={ currentGuitars } />

        <Pagination
          totalCount={ totalCount }
          currentPage={ currentPage }
          path={ AppRoute.Catalog }
        />
      </div>
    </div>
  );
}

export default CatalogScreen;
