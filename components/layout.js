import Head from 'next/head';
import Nav from './nav';
import Footer from './footer';

export default ({ children, title = 'This is the default title' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />
    {children}
    <Footer />
  </>
);
