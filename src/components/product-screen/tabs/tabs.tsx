import { getGuitarType } from '../../../utils/common';
import { GuitarDTO } from '../../../types/guitar';

type TabsProps = {
  guitar: GuitarDTO;
}

function Tabs({ guitar }: TabsProps): JSX.Element {
  const { vendorCode, stringCount, description } = guitar;

  const guitarType = getGuitarType(guitar);

  return (
    <div className="tabs">
      <a
        className="button button--medium tabs__button"
        href="#characteristics"
      >
        Характеристики
      </a>

      <a
        className="button button--black-border button--medium tabs__button"
        href="#description"
      >
        Описание
      </a>

      <div className="tabs__content" id="characteristics">
        <table className="tabs__table">
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

        <p className="tabs__product-description hidden">
          { description }
        </p>
      </div>
    </div>
  );
}

export default Tabs;
