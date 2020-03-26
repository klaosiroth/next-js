import Nav from './nav';
import Footer from './footer';

const Layout = porps => {
  return (
    <>
      <Nav />
      {porps.children}
      <Footer />
    </>
  );
};

export default Layout;
