import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useEffect } from 'react';

const Layout = () => {
  useEffect(() => {
    document.title = 'Client Side Rendering';
  }, []);

  return (
    <div className="bg-gray-light">
      <Header />
      <div className="sm:mt-20 mt-28 mb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
