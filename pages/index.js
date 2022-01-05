import Head from 'next/head';
import Image from 'next/image';
import BottomMessage from '../components/BottomMessage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Astrument</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Home Page</h1>
      {/* <Image
        src={'/guitar1/photo1.webp'}
        alt='guitar'
        width={500}
        height={500}
      /> */}
      <BottomMessage />
    </div>
  );
}
