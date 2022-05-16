import { Link } from 'react-router-dom';
import { CARDS_PER_PAGE } from '../../../const';

type PaginationProps = {
  totalCount: number;
  currentPage: number;
  path: string,
};

const STEP = 1;

function Pagination({ totalCount, currentPage, path }: PaginationProps): JSX.Element {
  const quantityPages = Math.ceil(totalCount / CARDS_PER_PAGE);

  const pageNumbers = Array.from({ length: quantityPages }, (v, k) => k + 1);

  const isBefore = currentPage !== STEP;
  const isNext = totalCount !== 0 && currentPage !== quantityPages;

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">
        { isBefore &&
        <li className="pagination__page pagination__page--prev" id="prev">
          <Link
            className="link pagination__page-link"
            to={ `${path}/${currentPage - STEP}` }
          >
            Назад
          </Link>
        </li> }

        { pageNumbers.map((pageNumber) => (
          <li className="pagination__page" key={ pageNumber }>
            <Link
              className={ `link pagination__page-link ${currentPage === pageNumber ? 'pagination__page--active' : ''}` }
              to={ `${path}/${pageNumber}` }
            >
              { pageNumber }
            </Link>
          </li>
        )) }

        { isNext &&
        <li className="pagination__page pagination__page--next" id="next">
          <Link
            className="link pagination__page-link"
            to={ `${path}/${currentPage + STEP}` }
          >
            Далее
          </Link>
        </li> }
      </ul>
    </div>
  );
}

export default Pagination;
