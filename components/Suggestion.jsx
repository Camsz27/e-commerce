import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Suggestion = ({ product }) => {
  return (
    <div className='flex flex-col w-1/3 gap-y-6'>
      <span className='bg-neutral-100'>
        <Image
          src={product.photos[0]}
          width={300}
          height={320}
          alt={product.name}
          className='mix-blend-multiply'
        />
      </span>
      <span className='text-center space-y-4'>
        <h2>{product.name}</h2>
        <Link href={`/product/${product._id}`} passHref>
          <button className='px-3 py-1.5 text-xs md:text-sm lg:text-base bg-amber-600 text-white hover:opacity-70'>
            See product
          </button>
        </Link>
      </span>
    </div>
  );
};

export default Suggestion;
