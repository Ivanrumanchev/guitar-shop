import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { stringsDisabledMapper } from '../../../utils/filter';
import { GuitarTypeName, StringVariants } from '../../../constants/const';
import { ParamKey } from '../../../constants/params';
import { CheckSetStringsMapper, CheckStringsMapper } from '../../../types/filter';

function FilterStrings(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();

  const guitarTypeCheckedQuery = searchParams.getAll(ParamKey.Type) ? searchParams.getAll(ParamKey.Type) : [];

  const acousticCheckedQuery = guitarTypeCheckedQuery.includes(GuitarTypeName.Acoustic);
  const electricCheckedQuery = guitarTypeCheckedQuery.includes(GuitarTypeName.Electric);
  const ukuleleCheckedQuery = guitarTypeCheckedQuery.includes(GuitarTypeName.Ukulele);

  const stringsTypeCheckedQuery: Array<string | undefined> = searchParams.getAll(ParamKey.StringCount) ? searchParams.getAll(ParamKey.StringCount) : [];

  const fourCheckedQuery = stringsTypeCheckedQuery.includes(StringVariants.FourStrings.match(/\d/g)?.join(''));
  const sixCheckedQuery = stringsTypeCheckedQuery.includes(StringVariants.SixStrings.match(/\d/g)?.join(''));
  const sevenCheckedQuery = stringsTypeCheckedQuery.includes(StringVariants.SevenStrings.match(/\d/g)?.join(''));
  const twelveCheckedQuery = stringsTypeCheckedQuery.includes(StringVariants.TwelveStrings.match(/\d/g)?.join(''));

  const [fourChecked, setFourChecked] = useState(fourCheckedQuery);
  const [sixChecked, setSixChecked] = useState(sixCheckedQuery);
  const [sevenChecked, setSevenChecked] = useState(sevenCheckedQuery);
  const [twelveChecked, setTwelveChecked] = useState(twelveCheckedQuery);

  const checkSetStateMapper: CheckSetStringsMapper = {
    [StringVariants.FourStrings]: function(checked: boolean) {
      setFourChecked(checked);
    },
    [StringVariants.SixStrings]: function(checked: boolean) {
      setSixChecked(checked);
    },
    [StringVariants.SevenStrings]: function(checked: boolean) {
      setSevenChecked(checked);
    },
    [StringVariants.TwelveStrings]: function(checked: boolean) {
      setTwelveChecked(checked);
    },
  };

  const checkStateMapper: CheckStringsMapper = {
    [StringVariants.FourStrings]: function() {
      return fourChecked;
    },
    [StringVariants.SixStrings]: function() {
      return sixChecked;
    },
    [StringVariants.SevenStrings]: function() {
      return sevenChecked;
    },
    [StringVariants.TwelveStrings]: function() {
      return twelveChecked;
    },
  };

  useEffect(() => {
    setFourChecked(fourCheckedQuery);
    setSixChecked(sixCheckedQuery);
    setSevenChecked(sevenCheckedQuery);
    setTwelveChecked(twelveCheckedQuery);
  }, [fourCheckedQuery, sixCheckedQuery, sevenCheckedQuery, twelveCheckedQuery]);

  const stringsTypeChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    checkSetStateMapper[evt.target.name as StringVariants](evt.target.checked);

    const quantityStringsForParams = evt.target.name.match(/\d/g)?.join('');

    if (evt.target.checked && quantityStringsForParams) {
      searchParams.append(ParamKey.StringCount, quantityStringsForParams);
    } else {
      searchParams.delete(ParamKey.StringCount);

      stringsTypeCheckedQuery
        .filter((param) => param !== quantityStringsForParams)
        .forEach((param) => param ? searchParams.append(ParamKey.StringCount, param) : '');
    }

    setSearchParams(searchParams);
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">
        Количество струн
      </legend>

      { Object.keys(checkStateMapper).map((type) => (
        <div className="form-checkbox catalog-filter__block-item" key={ type }>
          <input
            className="visually-hidden"
            type="checkbox"
            id={ type }
            name={ type }
            disabled={ !stringsDisabledMapper[type as StringVariants](acousticCheckedQuery, electricCheckedQuery, ukuleleCheckedQuery) }
            checked={ checkStateMapper[type as StringVariants]() }
            onChange={ stringsTypeChangeHandler }
          />

          <label htmlFor={ type }>
            { type }
          </label>
        </div>
      )) }
    </fieldset>
  );
}

export default FilterStrings;
