import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import LoadingScreen from '../../loading-screen/loading-screen';
import { searchGuitarsAction } from '../../../store/api-actions';
import { useAppDispatch } from '../../../hooks/store';
import { ParamKey, ParamValue } from '../../../constants/params';
import { Params } from '../../../types/api-action';

const FIRST_GUITAR_NUMBER = '0';
const LIMIT_GUITAR = '1';

function FilterPrice(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allFetchesDone, setAllFetchesDone] = useState(false);
  const location = useLocation();

  const minPriceQuery = searchParams.get(ParamKey.PriceGte) ? searchParams.get(ParamKey.PriceGte)?.toString() : '';
  const maxPriceQuery = searchParams.get(ParamKey.PriceLte) ? searchParams.get(ParamKey.PriceLte)?.toString() : '';

  const [minPriceInput, setMinPriceInput] = useState(minPriceQuery ? minPriceQuery : '');
  const [maxPriceInput, setMaxPriceInput] = useState(maxPriceQuery ? maxPriceQuery : '');

  const dispatch = useAppDispatch();

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    setMinPriceInput(minPriceQuery ? minPriceQuery : '');
    setMaxPriceInput(maxPriceQuery ? maxPriceQuery : '');
  }, [minPriceQuery, maxPriceQuery]);

  useEffect(() => {
    const configLow: Params = {
      [ParamKey.Start]: FIRST_GUITAR_NUMBER,
      [ParamKey.Limit]: LIMIT_GUITAR,
      [ParamKey.Sort]: ParamValue.Price,
      [ParamKey.Order]: ParamValue.Asc,
    };

    searchParams.delete(ParamKey.Sort);
    searchParams.delete(ParamKey.Order);

    const rest = searchParams.toString();

    const configHigh = {
      ...configLow,
      [ParamKey.Order]: ParamValue.Desc,
    };

    const getMinPrice = () => dispatch(searchGuitarsAction({ params: configLow, rest }))
      .then((r) => {
        if (r.payload instanceof Array && r.payload[0]) {
          setMinPrice(r.payload[0].price);
        } else {
          setMinPrice(0);
        }
      });

    const getMaxPrice = () => dispatch(searchGuitarsAction({ params: configHigh, rest }))
      .then((r) => {
        if (r.payload instanceof Array && r.payload[0]) {
          setMaxPrice(r.payload[0].price);
        } else {
          setMaxPrice(0);
        }
      });

    Promise.all([getMinPrice(), getMaxPrice()])
      .then(() => setAllFetchesDone(true));
  }, [dispatch, location.search, searchParams]);

  const minPriceInputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setMinPriceInput(evt.target.value);
  };

  const maxPriceInputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setMaxPriceInput(evt.target.value);
  };

  const minPriceBlurHandler = () => {
    let minPriceForParams = minPriceInput;

    if (minPriceInput && +minPriceInput < minPrice) {
      minPriceForParams = minPrice.toString();
      setMinPriceInput(minPriceForParams);
    }

    if (!maxPriceInput && minPriceInput && +minPriceInput > maxPrice) {
      minPriceForParams = maxPrice.toString();
      setMinPriceInput(minPriceForParams);
    }

    if (minPriceInput && maxPriceInput && +minPriceInput > +maxPriceInput) {
      minPriceForParams = maxPriceInput;
      setMinPriceInput(minPriceForParams);
    }

    searchParams.delete(ParamKey.PriceGte);

    if (minPriceForParams) {
      searchParams.set(ParamKey.PriceGte, minPriceForParams);
    }

    setSearchParams(searchParams);
  };

  const maxPriceBlurHandler = () => {
    let maxPriceForParams = maxPriceInput;

    if (maxPriceInput && +maxPriceInput > maxPrice) {
      maxPriceForParams = maxPrice.toString();
      setMaxPriceInput(maxPriceForParams);
    }

    if (!minPriceInput && maxPriceInput && +maxPriceInput < minPrice) {
      maxPriceForParams = minPrice.toString();
      setMaxPriceInput(maxPriceForParams);
    }

    if (minPriceInput && maxPriceInput && +maxPriceInput < +minPriceInput) {
      maxPriceForParams = minPriceInput;
      setMaxPriceInput(maxPriceForParams);
    }

    searchParams.delete(ParamKey.PriceLte);

    if (maxPriceForParams) {
      searchParams.set(ParamKey.PriceLte, maxPriceForParams);
    }

    setSearchParams(searchParams);
  };

  if (!allFetchesDone) {
    return <LoadingScreen />;
  }

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">
        Цена, ₽
      </legend>

      <div className="catalog-filter__price-range">
        <div className="form-input">
          <label className="visually-hidden">
            Минимальная цена
          </label>

          <input
            type="number"
            placeholder={ minPrice.toString() }
            id="priceMin"
            name="from"
            value={ minPriceInput }
            onChange={ minPriceInputHandler }
            onBlur={ minPriceBlurHandler }
          />
        </div>

        <div className="form-input">
          <label className="visually-hidden">
            Максимальная цена
          </label>

          <input
            type="number"
            placeholder={ maxPrice.toString() }
            id="priceMax"
            name="to"
            value={ maxPriceInput }
            onChange={ maxPriceInputHandler }
            onBlur={ maxPriceBlurHandler }
          />
        </div>
      </div>
    </fieldset>
  );
}

export default FilterPrice;
