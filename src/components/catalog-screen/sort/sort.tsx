import { useSearchParams } from 'react-router-dom';
import { ParamKey, ParamValue } from '../../../constants/params';

function Sort(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortPriceHandler = () => {
    searchParams.delete(ParamKey.Sort);
    searchParams.set(ParamKey.Sort, ParamValue.Price);

    setSearchParams(searchParams);
  };

  const sortRatingHandler = () => {
    searchParams.delete(ParamKey.Sort);
    searchParams.set(ParamKey.Sort, ParamValue.Rating);

    setSearchParams(searchParams);
  };

  const sortOrderUpHandler = () => {
    if (!searchParams.get(ParamKey.Sort)) {
      searchParams.set(ParamKey.Sort, ParamValue.Price);
    }

    searchParams.delete(ParamKey.Order);
    searchParams.set(ParamKey.Order, ParamValue.Asc);

    setSearchParams(searchParams);
  };

  const sortOrderDownHandler = () => {
    if (!searchParams.get(ParamKey.Sort)) {
      searchParams.set(ParamKey.Sort, ParamValue.Price);
    }

    searchParams.delete(ParamKey.Order);
    searchParams.set(ParamKey.Order, ParamValue.Desc);

    setSearchParams(searchParams);
  };


  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">
        Сортировать:
      </h2>

      <div className="catalog-sort__type">
        <button className={`catalog-sort__type-button ${searchParams.get(ParamKey.Sort)?.includes(ParamValue.Price) ? 'catalog-sort__type-button--active' : ''}`}
          aria-label="по цене"
          onClick={ sortPriceHandler }
        >
          по цене
        </button>

        <button className={`catalog-sort__type-button ${searchParams.get(ParamKey.Sort)?.includes(ParamValue.Rating) ? 'catalog-sort__type-button--active' : ''}`}
          aria-label="по популярности"
          onClick={ sortRatingHandler }
        >
          по популярности
        </button>
      </div>

      <div className="catalog-sort__order">
        <button
          className={`catalog-sort__order-button catalog-sort__order-button--up ${searchParams.get(ParamKey.Order)?.includes(ParamValue.Asc) ? 'catalog-sort__order-button--active' : ''}`}
          aria-label="По возрастанию"
          onClick={ sortOrderUpHandler }
        />

        <button
          className={`catalog-sort__order-button catalog-sort__order-button--down ${searchParams.get(ParamKey.Order)?.includes(ParamValue.Desc) ? 'catalog-sort__order-button--active' : ''}`}
          aria-label="По убыванию"
          onClick={ sortOrderDownHandler }
        />
      </div>
    </div>
  );
}

export default Sort;
