import { useSearchParams } from 'react-router-dom';
import { getGuitarType } from '../../../utils/common';
import { GuitarDTO } from '../../../types/guitar';

type TabsProps = {
  guitar: GuitarDTO;
}

function Tabs({ guitar }: TabsProps): JSX.Element {
  const { vendorCode, stringCount, description } = guitar;

  const guitarType = getGuitarType(guitar);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleCharacteristicsClick = () => {
    searchParams.delete('tabs');

    setSearchParams(searchParams);
  };

  const handleDescriptionClick = () => {
    searchParams.set('tabs', 'description');

    setSearchParams(searchParams);
  };

  const isDescription = searchParams.has('tabs');

  return (
    <div className="tabs">
      <button
        className={ `button button--medium tabs__button ${isDescription ? 'button--black-border' : ''}` }
        onClick={ handleCharacteristicsClick }
      >
        Характеристики
      </button>

      <button
        className={ `button button--medium tabs__button ${isDescription ? '' : 'button--black-border'}` }
        onClick={ handleDescriptionClick }
      >
        Описание
      </button>

      <div
        className="tabs__content"
        id={ isDescription ? 'description' : 'characteristics' }
      >
        <table className={ `tabs__table ${isDescription ? 'hidden' : ''}` } data-testid="characteristics">
          <tbody>
            <tr className="tabs__table-row">
              <td className="tabs__title">
                Артикул:
              </td>

              <td className="tabs__value">
                { vendorCode }
              </td>
            </tr>

            <tr className="tabs__table-row">
              <td className="tabs__title">
                Тип:
              </td>

              <td className="tabs__value">
                { guitarType }
              </td>
            </tr>

            <tr className="tabs__table-row">
              <td className="tabs__title">
                Количество струн:
              </td>

              <td className="tabs__value">
                { stringCount && `${stringCount} струнная` }
              </td>
            </tr>
          </tbody>
        </table>

        <p className={ `tabs__product-description ${isDescription ? '' : 'hidden'}` }>
          { description }
        </p>
      </div>
    </div>
  );
}

export default Tabs;
