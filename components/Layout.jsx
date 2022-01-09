import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartModal from './CartModal';

const Layout = ({ children }) => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Navbar modalHandler={setDisplayModal} />
      {displayModal && <CartModal modalHandler={setDisplayModal} />}
      <main className='flex-grow flex'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
