import Link from 'next/link';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Welcome to Next.js!</h1>
    <Link href="/about">
      <a>Go to About</a>
    </Link>
  </Layout>
);
