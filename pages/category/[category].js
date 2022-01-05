import Head from 'next/head';
import BottomMessage from '../../components/BottomMessage';

export default function Category() {
  return (
    <div>
      <Head>
        <title>Astrument</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Category Page</h1>
      <BottomMessage />
    </div>
  );
}
