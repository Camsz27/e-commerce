import Head from 'next/head';
import BottomMessage from '../../components/BottomMessage';
import Categories from '../../components/Categories';
import SuggestionPanel from '../../components/SuggestionPanel';
import dbConnect from '../../database/dbConnect';
import Product from '../../models/Product';

export default function ProductDetail({ product, suggestions }) {
  return (
    <div>
      <Head>
        <title>Astrument</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Product Page</h1>
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

export const getStaticPaths = () => {
  return {
    paths: [{ params: { productId: '61d5ba0ad8d947be405cc338' } }],
    fallback: true,
  };
};
