import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchGuitarsAction } from '../../../store/api-actions';
import { useAppDispatch } from '../../../hooks/store';
import { AppRoute } from '../../../constants/const';
import { ParamKey } from '../../../constants/params';
import { GuitarDTO } from '../../../types/guitar';

function FormSearch(): JSX.Element {
  const [searchText, setSearchText] = useState('');
  const [foundGuitars, setFoundGuitars] = useState<GuitarDTO[]>([]);

  const dispatch = useAppDispatch();

  const formSearchHandler = async (evt: ChangeEvent<HTMLInputElement>) => {
    let text = evt.target.value;

    setSearchText(text);

    text = text.replace(/\\/g, '');

    const params = {
      [ParamKey.Like]: text,
    };

    const guitars = await dispatch(searchGuitarsAction({ params }));

    if (guitars.payload instanceof Array) {
      setFoundGuitars(guitars.payload);
    }
  };

  const resetClickHandler = () => {
    setSearchText('');
    setFoundGuitars([]);
  };

  const foundGuitarClickHandler = () => {
    resetClickHandler();
  };

  return (
    <div className="form-search">
      <form
        className="form-search__form"
        id="form-search"
        onSubmit={ (evt) => evt.preventDefault() }
      >
        <button
          className="form-search__submit"
          type="submit"
        >
          <svg
            className="form-search__icon"
            width="14"
            height="15"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-search" />
          </svg>

          <span className="visually-hidden">
            Начать поиск
          </span>
        </button>

        <input
          className="form-search__input"
          id="search"
          type="text"
          autoComplete="off"
          placeholder="что вы ищите?"
          value={ searchText }
          onChange={ formSearchHandler }
        />

        <label className="visually-hidden" htmlFor="search">
          Поиск
        </label>

      </form>

      <ul className={ `form-search__select-list ${foundGuitars.length && searchText ? 'list-opened' : 'hidden'}` }>
        { foundGuitars.map(({ name, id }) => (
          <li
            key={ id }
          >
            <Link
              to={ `${AppRoute.Product}/${id}` }
              tabIndex={ 0 }
              className="form-search__select-item"
              style={{ display: 'block' }}
              onClick={ foundGuitarClickHandler }
            >
              { name }
            </Link>
          </li>
        )) }
      </ul>

      <button
        className="form-search__reset"
        type="reset"
        form="form-search"
        onClick={ resetClickHandler }
      >
        <svg
          className="form-search__icon"
          width="14"
          height="15"
          aria-hidden="true"
        >
          <use xlinkHref="#icon-close"/>
        </svg>

        <span className="visually-hidden">
          Сбросить поиск
        </span>
      </button>
    </div>
  );
}

export default FormSearch;
