import { Outlet } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import SvgSprite from '../svg-sprite/svg-sprite';
import ModalLayout from '../common/modal-layout/modal-layout';

function Layout(): JSX.Element {
  return (
    <>
      <SvgSprite />

      <ModalLayout />

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
