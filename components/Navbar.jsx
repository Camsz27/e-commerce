import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [active, setActive] = useState(router.asPath);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setActive(router.asPath);
  }, [router.asPath]);

  const displayMenu = () => {
    setDisplay((prev) => !prev);
  };

  return (
    <div className='bg-black text-white py-10'>
      <header className='w-5/6 mx-auto border-b border-gray-400 pb-5 flex justify-between items-center'>
        <Link href={'/'} passHref>
          <h1 className='font-mono font-extrabold text-2xl cursor-pointer'>
            Astrument
          </h1>
        </Link>
        <nav className='hidden md:flex justify-center gap-x-10 font-medium text-sm font-sans'>
          <Link href={'/'} passHref>
            <button
              className={`${
                active === '/' ? 'text-amber-600' : ''
              } hover:text-amber-600`}
            >
              HOME
            </button>
          </Link>
          <Link href={'/category/guitars'} passHref>
            <button
              className={`${
                active === '/category/guitars' ? 'text-amber-600' : ''
              } hover:text-amber-600`}
            >
              GUITARS
            </button>
          </Link>
          <Link href={'/category/pianos'} passHref>
            <button
              className={`${
                active === '/category/pianos' ? 'text-amber-600' : ''
              } hover:text-amber-600`}
            >
              PIANOS
            </button>
          </Link>
          <Link href={'/category/drums'} passHref>
            <button
              className={`${
                active === '/category/drums' ? 'text-amber-600' : ''
              } hover:text-amber-600`}
            >
              DRUMS
            </button>
          </Link>
        </nav>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 hidden md:block'
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
        <button onClick={displayMenu} className='md:hidden'>
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
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </header>
      {display && (
        <section className='w-5/6 mx-auto flex flex-col mt-3 gap-y-2'>
          <Link href={'/'} passHref>
            <button className={`${active === '/' ? 'text-amber-600' : ''}`}>
              HOME
            </button>
          </Link>
          <Link href={'/category/guitars'} passHref>
            <button
              className={`${
                active === '/category/guitars' ? 'text-amber-600' : ''
              }`}
            >
              GUITARS
            </button>
          </Link>
          <Link href={'/category/pianos'} passHref>
            <button
              className={`${
                active === '/category/pianos' ? 'text-amber-600' : ''
              }`}
            >
              PIANOS
            </button>
          </Link>
          <Link href={'/category/drums'} passHref>
            <button
              className={`${
                active === '/category/drums' ? 'text-amber-600' : ''
              }`}
            >
              DRUMS
            </button>
          </Link>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 mx-auto'
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
        </section>
      )}
    </div>
  );
};

export default Navbar;
