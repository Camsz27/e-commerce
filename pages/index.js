import Head from 'next/head';
import BottomMessage from '../components/BottomMessage';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import MainProduct from '../components/MainProduct';
import dbConnect from '../database/dbConnect';
import Product from '../models/Product';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Astrument</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainProduct />
      <Categories />
      <FeaturedProducts products={products} />
      <BottomMessage />
    </div>
  );
}

export const getStaticProps = async () => {
  await dbConnect();
  const result = await Product.find({ featured: true });
  const products = result.map((doc) => {
    const product = doc.toObject();
    product._id = product._id.toString();
    return product;
  });
  return { props: { products } };
};
