import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import SvgSprite from '../svg-sprite/svg-sprite';

function Layout(): JSX.Element {
  return (
    <>
      <SvgSprite />

      <div className="wrapper">
        <Header />

        <main className="page-content">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Layout;
