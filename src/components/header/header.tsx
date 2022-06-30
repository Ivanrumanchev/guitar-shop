import { Link, useLocation } from 'react-router-dom';
import FormSearch from './form-search/form-search';
import { AppRoute } from '../../constants/const';

function Header(): JSX.Element {
  const location = useLocation();
  const isCatalogPage = location.pathname.includes(AppRoute.Catalog);

  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <a className="header__logo logo" href="/">
          <img
            className="logo__img"
            width="70"
            height="70"
            src="img/svg/logo.svg"
            alt="Логотип"
          />
        </a>

        <nav className="main-nav">
          <ul className="main-nav__list">
            <li>
              <Link
                to={ AppRoute.Catalog }
                className={`link main-nav__link ${isCatalogPage ? 'link--current' : ''}`}
              >
                Каталог
              </Link>
            </li>

            <li>
              <a className="link main-nav__link" href="/">
                Где купить?
              </a>
            </li>

            <li>
              <a className="link main-nav__link" href="/">
                О компании
              </a>
            </li>
          </ul>
        </nav>

        <FormSearch />

        <a
          className="header__cart-link"
          href="/"
          aria-label="Корзина"
        >
          <svg
            className="header__cart-icon"
            width="14"
            height="14"
            aria-hidden="true"
          >
            <use xlinkHref="#icon-basket"/>
          </svg>

          <span className="visually-hidden">
            Перейти в корзину
          </span>

          <span className="header__cart-count">
            2
          </span>
        </a>
      </div>
    </header>
  );
}

export default Header;
