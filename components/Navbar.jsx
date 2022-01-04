import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='bg-black text-white py-10'>
      <header className='w-5/6 mx-auto border-b border-gray-400 pb-5 flex justify-between items-center'>
        <Link href={'/'} passHref>
          <h1 className='font-mono font-extrabold text-2xl cursor-pointer'>
            Astrument
          </h1>
        </Link>
        <nav className='flex justify-center gap-x-10 font-medium text-sm font-sans'>
          <Link href={'/'}>HOME</Link>
          <Link href={'/category/guitars'}>GUITARS</Link>
          <Link href={'/category/pianos'}>PIANOS</Link>
          <Link href={'/category/drums'}>DRUMS</Link>
        </nav>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      </header>
    </div>
  );
};

export default Navbar;
