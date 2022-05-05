import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CatalogScreen from '../../pages/catalog-screen';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';
import NotFoundScreen from '../not-found-screen/not-found-screen';

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
              <CatalogScreen />
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
