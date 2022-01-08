import React, { useEffect, useRef, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import CartItem from './CartItem';
import CartContext from '../context/CartContext';

const CartModal = ({ modalHandler }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const modalWrapper = useRef();
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const outsideClickHandler = (e) => {
    if (!modalWrapper.current.contains(e.target)) {
      modalHandler(false);
    }
  };

  const removeAllHandler = () => {
    cartCtx.clear();
  };

  const modalContent = (
    <div
      className='absolute inset-0 z-10 bg-opacity-30 bg-black flex items-center justify-center h-full'
      onClick={outsideClickHandler}
    >
      <main
        className='bg-white py-5 px-4 space-y-4 rounded-xl w-72 md:w-96'
        ref={modalWrapper}
      >
        <span className='flex justify-between'>
          <h1 className='font-semibold text-xl'>
            Cart ({cartCtx.items.length})
          </h1>
          <button
            className='hover:underline opacity-60'
            onClick={removeAllHandler}
          >
            Remove All
          </button>
        </span>
        <span className='grid grid-cols-9 gap-x-2 gap-y-5 max-h-60 overflow-y-auto'>
          {cartCtx.items.map((item, index) => (
            <CartItem key={index} product={item} />
          ))}
        </span>
        <span className='flex justify-between'>
          <h3 className='opacity-60'>Total</h3>
          <h2 className='font-medium'>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(cartCtx.total())}
          </h2>
        </span>
        <span className='flex justify-center'>
          <Link href={'/checkout'} passHref>
            <button className='bg-amber-600 text-white hover:opacity-80 w-5/6 py-2 text-sm font-medium'>
              CHECKOUT
            </button>
          </Link>
        </span>
      </main>
    </div>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modalRoot')
    );
  } else {
    return null;
  }
};

export default CartModal;
