import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CatalogScreen from '../../pages/catalog-screen';
import Layout from '../layout/layout';
import ProductScreen from '../../pages/product-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { AppRoute, DEFAULT_PAGE } from '../../const';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout />
          }
        >
          <Route
            path={ AppRoute.Root }
            element={
              <Navigate
                to={ `${AppRoute.Catalog}/${DEFAULT_PAGE}` }
                replace
              />
            }
          />

          <Route
            path={ AppRoute.Catalog }
            element={
              <Navigate
                to={ `${AppRoute.Catalog}/${DEFAULT_PAGE}` }
                replace
              />
            }
          />

          <Route
            path={ AppRoute.CatalogPage }
            element={
              <CatalogScreen />
            }
          />

          <Route
            path={ AppRoute.Product }
            element={
              <Navigate
                to={ `${AppRoute.Product}/${DEFAULT_PAGE}` }
                replace
              />
            }
          />

          <Route
            path={ AppRoute.ProductId }
            element={
              <ProductScreen />
            }
          />
        </Route>

        <Route
          path="*"
          element={ <NotFoundScreen /> }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
