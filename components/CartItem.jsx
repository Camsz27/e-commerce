import React, { useState, useContext } from 'react';
import Image from 'next/image';
import CartContext from '../context/CartContext';

const CartItem = ({ product }) => {
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(product.quantity);

  const decreaseHandler = () => {
    if (quantity === 1) {
      cartCtx.deleteItem(product);
    } else {
      setQuantity((prev) => prev - 1);
      cartCtx.decreaseQuantity(product, 1);
    }
  };

  const increaseHandler = () => {
    setQuantity((prev) => prev + 1);
    cartCtx.increaseQuantity(product, 1);
  };

  return (
    <>
      <span className='bg-neutral-100 col-span-2'>
        <Image
          src={product.product.photos[0]}
          width={500}
          height={500}
          alt='guitar'
          className='mix-blend-multiply'
        />
      </span>
      <span className='col-span-4 self-center space-y-2'>
        <h3 className='font-semibold truncate'>{product.product.name}</h3>
        <h5>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(product.product.price)}
        </h5>
      </span>
      <span className='col-span-3 flex items-center gap-x-2 justify-self-end overflow-x-hidden'>
        <button
          className='border-2 border-gray-400 rounded-xl p-1.5 hover:scale-110'
          onClick={decreaseHandler}
          type='button'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-3 w-3 text-gray-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M20 12H4'
            />
          </svg>
        </button>
        <h4>{quantity}</h4>
        <button
          className='border-2 border-gray-400 rounded-xl p-1.5 hover:scale-110'
          onClick={increaseHandler}
          type='button'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-3 w-3 stroke-gray-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 4v16m8-8H4'
            />
          </svg>
        </button>
      </span>
    </>
  );
};

export default CartItem;
