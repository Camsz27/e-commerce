import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartModal from './CartModal';
import { useRouter } from 'next/router';
import OrderModal from './OrderModal';

const Layout = ({ children }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const router = useRouter();

  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Navbar modalHandler={setDisplayModal} />
      {displayModal && <CartModal modalHandler={setDisplayModal} />}
      {router.query.canceled && <OrderModal result={'canceled'} />}
      {router.query.success && <OrderModal result={'success'} />}
      <main className='flex-grow flex'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
