import Head from 'next/head';
import BottomMessage from '../../components/BottomMessage';
import Categories from '../../components/Categories';
import SuggestionPanel from '../../components/SuggestionPanel';
import dbConnect from '../../database/dbConnect';
import Product from '../../models/Product';
import ProductInformation from '../../components/ProductInformation';
import CartModal from '../../components/CartModal';
import { useState } from 'react';

export default function ProductDetail({ product, suggestions }) {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <div className='space-y-16 mt-20'>
      <Head>
        <title>Astrument</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {displayModal && <CartModal modalHandler={setDisplayModal} />}
      <ProductInformation product={product} modalHandler={setDisplayModal} />
      <SuggestionPanel suggestions={suggestions} />
      <Categories />
      <BottomMessage />
    </div>
  );
}

export const getStaticProps = async (context) => {
  await dbConnect();

  // Get data of the product that is being requested
  const productRequest = await Product.findById(context.params.productId);
  const product = productRequest.toObject();
  product._id = product._id.toString();

  // Get suggested products
  const suggestionRequest = await Product.find({
    _id: { $ne: product._id },
    category: product.category,
  });
  const suggestions = suggestionRequest.map((doc) => {
    const suggestion = doc.toObject();
    suggestion._id = suggestion._id.toString();
    return suggestion;
  });

  return { props: { product, suggestions } };
};

export const getStaticPaths = async () => {
  await dbConnect();
  const products = await Product.find();
  let productPaths = [];
  products.map((product) =>
    productPaths.push({ params: { productId: product._id.toString() } })
  );
  return {
    paths: productPaths,
    fallback: false,
  };
};
