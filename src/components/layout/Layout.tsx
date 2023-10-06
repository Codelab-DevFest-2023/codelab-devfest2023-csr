import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useEffect } from 'react';

const Layout = () => {
  useEffect(() => {
    document.title = 'Client Side Rendering';
  }, []);

  return (
    <div className="bg-gray-light h-screen">
      <Header />
      <div className="sm:pt-20 pt-28 pb-12 h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
