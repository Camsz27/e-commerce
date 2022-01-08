import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartModal from './CartModal';

const Layout = ({ children }) => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <>
      <Navbar modalHandler={setDisplayModal} />
      {displayModal && <CartModal modalHandler={setDisplayModal} />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
