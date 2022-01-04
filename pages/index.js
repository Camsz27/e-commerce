import Head from 'next/head';

export default function Home() {
  return (
    <div className='bg-black text-white h-96'>
      <Head>
        <title>Astrument</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Home Page</h1>
    </div>
  );
}
