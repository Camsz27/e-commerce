import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-red-300 text-white h-96'>
      <Head>
        <title>Astrument</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Home Page</h1>
      <Image
        src={'/guitar1/photo1.webp'}
        alt='guitar'
        width={500}
        height={500}
      />
    </div>
  );
}
