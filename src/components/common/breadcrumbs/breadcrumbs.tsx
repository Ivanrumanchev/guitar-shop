import { Link } from 'react-router-dom';
import { BreadcrumbsType } from '../../../types/breadcrumbs';

type BreadcrumbsProps = {
  breadcrumbs: BreadcrumbsType[];
};

function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps): JSX.Element {
  return (
    <ul className="breadcrumbs page-content__breadcrumbs">
      { breadcrumbs.map((breadcrumb) => (
        <li className="breadcrumbs__item" key={ breadcrumb.name }>
          <Link className="link" to={ breadcrumb.url }>
            { breadcrumb.name }
          </Link>
        </li>
      )) }
    </ul>
  );
}

export default Breadcrumbs;
