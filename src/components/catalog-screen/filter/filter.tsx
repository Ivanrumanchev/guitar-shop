import { useSearchParams } from 'react-router-dom';
import FilterPrice from '../filter-price/filter-price';
import FilterStrings from '../filter-strings/filter-strings';
import FilterType from '../filter-type/filter-type';

function Filter(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const resetButtonClickHandler = () => {
    searchParams.keys();

    Array.from(searchParams.keys()).forEach((param) => searchParams.delete(param));

    setSearchParams(searchParams);
  };

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">
        Фильтр
      </h2>

      <FilterPrice />

      <FilterType />

      <FilterStrings />

      <button
        className="catalog-filter__reset-btn button button--black-border button--medium"
        type="reset"
        onClick={ resetButtonClickHandler }
      >
        Очистить
      </button>
    </form>
  );
}

export default Filter;
