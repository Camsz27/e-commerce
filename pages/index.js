import Head from 'next/head';
import Image from 'next/image';
import BottomMessage from '../components/BottomMessage';
import Categories from '../components/Categories';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Astrument</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Home Page</h1>
      <Categories />
      <BottomMessage />
    </div>
  );
}
