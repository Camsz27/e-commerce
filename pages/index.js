import Head from 'next/head';
import Image from 'next/image';
import BottomMessage from '../components/BottomMessage';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import MainProduct from '../components/MainProduct';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Astrument</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainProduct />
      <Categories />
      <FeaturedProducts />
      <BottomMessage />
    </div>
  );
}
