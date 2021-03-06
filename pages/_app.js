import '../styles/globals.css';
import Layout from '../components/Layout';
import { CartContextProvider } from '../context/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContextProvider>
  );
}

export default MyApp;
