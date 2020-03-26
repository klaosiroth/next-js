import Link from 'next/link';
import Layout from '../components/layout';

export default () => {
  return (
    <Layout>
      <h1>This is the about page</h1>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </Layout>
  );
};
