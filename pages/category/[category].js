import Head from 'next/head';
import BottomMessage from '../../components/BottomMessage';
import Categories from '../../components/Categories';
import { useRouter } from 'next/router';

export default function Category() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Astrument</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>{router.query.category}</h1>
      <Categories />
      <BottomMessage />
    </div>
  );
}
