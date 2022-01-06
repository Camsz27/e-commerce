import Head from 'next/head';
import BottomMessage from '../../components/BottomMessage';
import Categories from '../../components/Categories';
import { useRouter } from 'next/router';
import CategoryItem from '../../components/CategoryItem';
import dbConnect from '../../database/dbConnect';
import Product from '../../models/Product';

export default function Category({ products }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Astrument</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='bg-black text-white text-center pb-8 text-3xl uppercase font-bold'>
        {router.query.category}
      </h1>
      <div className='w-3/4 mx-auto space-y-14 py-10'>
        {products.map((product, index) => (
          <CategoryItem key={product._id} product={product} index={index} />
        ))}
      </div>
      <Categories />
      <BottomMessage />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const category = context.params.category.slice(0, -1);
  await dbConnect();
  const request = await Product.find({ category });
  const products = request.map((doc) => {
    const product = doc.toObject();
    product._id = product._id.toString();
    return product;
  });
  return { props: { products } };
};

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { category: 'guitars' } },
      { params: { category: 'pianos' } },
      { params: { category: 'drums' } },
    ],
    fallback: false,
  };
};
