import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CatalogScreen from '../../pages/catalog-screen';
import { AppRoute } from '../../const';
import Layout from '../layout/layout';


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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
