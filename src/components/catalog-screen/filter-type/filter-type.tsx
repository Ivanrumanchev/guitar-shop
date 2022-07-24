import _ from 'lodash';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getGuitarTypeName } from '../../../utils/common';
import { DEBOUNCE_DELAY, GuitarTypeName } from '../../../constants/const';
import { ParamKey } from '../../../constants/params';
import { CheckSetTypeMapper, CheckTypeMapper } from '../../../types/filter';

function FilterType(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const guitarTypeCheckedQuery = searchParams.getAll(ParamKey.Type) ? searchParams.getAll(ParamKey.Type) : [];

  const acousticCheckedQuery = guitarTypeCheckedQuery.includes(GuitarTypeName.Acoustic);
  const electricCheckedQuery = guitarTypeCheckedQuery.includes(GuitarTypeName.Electric);
  const ukuleleCheckedQuery = guitarTypeCheckedQuery.includes(GuitarTypeName.Ukulele);

  const [acousticChecked, setAcousticChecked] = useState(acousticCheckedQuery);
  const [electricChecked, setElectricChecked] = useState(electricCheckedQuery);
  const [ukuleleChecked, setUkuleleChecked] = useState(ukuleleCheckedQuery);

  useEffect(() => {
    setAcousticChecked(acousticCheckedQuery);
    setElectricChecked(electricCheckedQuery);
    setUkuleleChecked(ukuleleCheckedQuery);
  }, [acousticCheckedQuery, electricCheckedQuery, ukuleleCheckedQuery]);

  const checkSetStateMapper: CheckSetTypeMapper = {
    [GuitarTypeName.Acoustic]: function(checked: boolean) {
      setAcousticChecked(checked);
    },
    [GuitarTypeName.Electric]: function(checked: boolean) {
      setElectricChecked(checked);
    },
    [GuitarTypeName.Ukulele]: function(checked: boolean) {
      setUkuleleChecked(checked);
    },
  };

  const checkStateMapper: CheckTypeMapper = {
    [GuitarTypeName.Acoustic]: function() {
      return acousticChecked;
    },
    [GuitarTypeName.Electric]: function() {
      return electricChecked;
    },
    [GuitarTypeName.Ukulele]: function() {
      return ukuleleChecked;
    },
  };

  const guitarTypeChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    checkSetStateMapper[evt.target.name as GuitarTypeName](evt.target.checked);

    searchParams.delete(ParamKey.StringCount);

    if (evt.target.checked) {
      searchParams.append(ParamKey.Type, evt.target.name);
    } else {
      searchParams.delete(ParamKey.Type);

      guitarTypeCheckedQuery
        .filter((param) => param !== evt.target.name)
        .forEach((param) => searchParams.append(ParamKey.Type, param));
    }

    const setSearchParamsDebounced = _.debounce((searchParamsArg: URLSearchParams) => setSearchParams(searchParamsArg), DEBOUNCE_DELAY);

    setSearchParamsDebounced(searchParams);
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">
        Тип гитар
      </legend>

      { Object.keys(checkStateMapper).map((type) => {
        const guitarType = getGuitarTypeName(type);

        return (
          <div className="form-checkbox catalog-filter__block-item" key={ type }>
            <input
              className="visually-hidden"
              type="checkbox"
              id={ type }
              name={ type }
              checked={ checkStateMapper[type as GuitarTypeName]() }
              onChange={ guitarTypeChangeHandler }
            />

            <label htmlFor={ type }>
              { guitarType }
            </label>
          </div>
        );
      }) }
    </fieldset>
  );
}

export default FilterType;
