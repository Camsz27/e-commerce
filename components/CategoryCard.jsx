import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CategoryCard = ({ instrument }) => {
  return (
    <Link href={`/category/${instrument}`} passHref>
      <div className='bg-neutral-100 md:w-1/3 flex flex-col items-center cursor-pointer rounded-xl py-3 h-60 group hover:scale-105 hover:border border-gray-400'>
        <Image
          src={'/guitar2/photo3.jpg'}
          width={200}
          height={300}
          alt='guitar'
          className='mix-blend-multiply'
        />
        <h2 className='font-medium tracking-wide uppercase'>{instrument}</h2>
        <span className='flex items-center'>
          <h3 className='text-sm opacity-60 group-hover:text-amber-600'>
            SHOP
          </h3>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 text-amber-600'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={3}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
