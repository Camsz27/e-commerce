import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Head from 'next/head';
import CheckoutPanel from '../components/CheckoutPanel';
import SummaryPanel from '../components/SummaryPanel';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Checkout() {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return (
    <div className='bg-stone-200 py-10 flex-grow max-w-full'>
      <Head>
        <title>Astrument</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <form
        action='/api/checkout_sessions'
        method='POST'
        className='flex flex-col md:flex-row gap-x-10 gap-y-8 md:w-5/6 mx-auto'
      >
        <CheckoutPanel />
        <SummaryPanel />
      </form>
    </div>
  );
}
