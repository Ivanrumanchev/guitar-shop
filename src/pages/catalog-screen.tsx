import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/common/breadcrumbs/breadcrumbs';
import Filter from '../components/catalog-screen/filter/filter';
import Sort from '../components/catalog-screen/sort/sort';
import CardsList from '../components/catalog-screen/cards-list/cards-list';
import Pagination from '../components/catalog-screen/pagination/pagination';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { fetchGuitarsAction } from '../store/api-actions';
import { guitarsSelector } from '../store/selectors';
import { CARDS_PER_PAGE, DEFAULT_PAGE } from '../const';

function CatalogScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGuitarsAction());
  }, [dispatch]);

  const params = useParams();
  const currentPage = params.page ? +params.page : DEFAULT_PAGE;

  const guitars = useAppSelector(guitarsSelector);

  const lastGuitarIndex = currentPage * CARDS_PER_PAGE;
  const firstGuitarIndex = lastGuitarIndex - CARDS_PER_PAGE;
  const currentGuitars = guitars.slice(firstGuitarIndex, lastGuitarIndex);

  return (
    <div className="container">
      <h1 className="page-content__title title title--bigger">
        Каталог гитар
      </h1>

      <Breadcrumbs />

      <div className="catalog">
        <Filter />

        <Sort />

        <CardsList guitars={ currentGuitars } />

        <Pagination
          quantityGuitars={ guitars.length }
          currentPage={ currentPage }
        />
      </div>
    </div>
  );
}

export default CatalogScreen;
