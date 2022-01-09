import React, { useState, useEffect, useRef, useContext } from 'react';
import ReactDOM from 'react-dom';
import CartContext from '../context/CartContext';

const OrderModal = ({ result }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [modalHandler, setModalHandler] = useState(true);
  const modalWrapper = useRef();
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    setIsBrowser(true);
    if (result === 'success') {
      cartCtx.clear();
    }
  }, []);

  const outsideClickHandler = (e) => {
    if (!modalWrapper.current.contains(e.target)) {
      setModalHandler(false);
    }
  };

  const modalContent = (
    <div
      className='fixed inset-0 z-10 bg-opacity-30 bg-black flex items-center justify-center min-h-screen'
      onClick={outsideClickHandler}
    >
      <main
        className={`bg-white py-5 px-4 space-y-4 rounded-xl w-72 md:w-96 flex flex-col items-center ${
          result === 'success' ? 'text-green-600' : 'text-yellow-500'
        }`}
        ref={modalWrapper}
      >
        <h1 className='font-bold text-xl'>
          {result === 'success'
            ? 'Your order has been placed!'
            : "Your order couldn't be completed"}
        </h1>
        <div>
          {result === 'success' ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-12 w-12'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-12 w-12'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              />
            </svg>
          )}
        </div>
      </main>
    </div>
  );

  if (isBrowser && modalHandler) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modalRoot')
    );
  } else {
    return null;
  }
};

export default OrderModal;
