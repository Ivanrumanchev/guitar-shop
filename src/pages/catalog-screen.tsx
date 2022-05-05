import Breadcrumbs from '../components/common/breadcrumbs/breadcrumbs';
import Filter from '../components/catalog-screen/filter/filter';
import Sort from '../components/catalog-screen/sort/sort';
import CardsList from '../components/catalog-screen/cards-list/cards-list';
import Pagination from '../components/catalog-screen/pagination/pagination';

function CatalogScreen(): JSX.Element {
  return (
    <div className="container">
      <h1 className="page-content__title title title--bigger">
        Каталог гитар
      </h1>

      <Breadcrumbs />

      <div className="catalog">
        <Filter />

        <Sort />

        <CardsList />

        <Pagination />
      </div>
    </div>
  );
}

export default CatalogScreen;
