import { Link } from 'react-router-dom';
import { AppRoute, CARDS_PER_PAGE } from '../../../const';

type PaginationProps = {
  quantityGuitars: number;
  currentPage: number;
};

const STEP = 1;

function Pagination({ quantityGuitars, currentPage }: PaginationProps): JSX.Element {
  const quantityPages = Math.ceil(quantityGuitars / CARDS_PER_PAGE);

  const pageNumbers = Array.from({ length: quantityPages }, (v, k) => k + 1);

  const isBefore = currentPage !== STEP;
  const isNext = quantityGuitars !== 0 && currentPage !== quantityPages;

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        { isBefore &&
        <li className="pagination__page pagination__page--prev" id="prev">
          <Link
            className="link pagination__page-link"
            to={ `${AppRoute.Catalog}/${currentPage - STEP}` }
          >
            Назад
          </Link>
        </li> }

        { pageNumbers.map((pageNumber) => (
          <li className="pagination__page" key={ pageNumber }>
            <Link
              className={ `link pagination__page-link ${currentPage === pageNumber ? 'pagination__page--active' : ''}` }
              to={ `${AppRoute.Catalog}/${pageNumber}` }
            >
              { pageNumber }
            </Link>
          </li>
        )) }

        { isNext &&
        <li className="pagination__page pagination__page--next" id="next">
          <Link
            className="link pagination__page-link"
            to={ `${AppRoute.Catalog}/${currentPage + STEP}` }
          >
            Далее
          </Link>
        </li> }
      </ul>
    </div>
  );
}

export default Pagination;
