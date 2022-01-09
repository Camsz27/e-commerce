import React, { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from '../context/CartContext';

const SummaryPanel = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className='bg-white w-5/6 mx-auto md:w-1/3 rounded-xl px-4 py-5 space-y-6'>
      <h2 className='font-bold text-xl md:text-2xl uppercase'>Summary</h2>
      <span className='grid grid-cols-9 gap-x-2 gap-y-5 max-h-96 overflow-y-auto'>
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
      <span className='flex justify-between'>
        <h3 className='opacity-60'>Shipping</h3>
        <h2 className='font-medium'>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(50)}
        </h2>
      </span>
      <span className='flex justify-between'>
        <h3 className='opacity-60'>Grand Total</h3>
        <h2 className='font-medium'>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(cartCtx.total() + 50)}
        </h2>
      </span>
      <span className='w-full flex justify-center'>
        <button
          className='bg-amber-600 text-white hover:opacity-80 px-5 py-2 font-medium'
          type='submit'
        >
          Continue & pay
        </button>
      </span>
    </div>
  );
};

export default SummaryPanel;
