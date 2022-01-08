import React from 'react';
import Image from 'next/image';

const CartItem = () => {
  return (
    <>
      <span className='bg-neutral-100 col-span-2'>
        <Image
          src={'/guitar1/photo1.webp'}
          width={500}
          height={500}
          alt='guitar'
          className='mix-blend-multiply'
        />
      </span>
      <span className='col-span-4 self-center space-y-2'>
        <h3 className='font-semibold truncate'>
          PRS Custom 24 Carved Figured Maple Top with Gen 3 Tremolo Solid Body
          Electric Guitar Gold Burst
        </h3>
        <h5>$5,343.00</h5>
      </span>
      <span className='col-span-3 flex items-center gap-x-3 justify-self-end'>
        <button className='border-2 border-gray-400 rounded-xl p-1.5 hover:scale-110'>
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
        <h4>5</h4>
        <button className='border-2 border-gray-400 rounded-xl p-1.5 hover:scale-110'>
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
