import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CategoryItem = ({ product, index }) => {
  const odd = index % 2 === 0 ? false : true;

  return (
    <div
      className={`flex flex-col md:${
        odd ? 'flex-row-reverse' : 'flex-row'
      } gap-y-5 gap-x-14 md:items-center`}
    >
      <span className='bg-neutral-100'>
        <Image
          src={product.photos[0]}
          width={450}
          height={500}
          alt={product.name}
          className='mix-blend-multiply'
        />
      </span>
      <span className='text-center md:text-left space-y-3 md:space-y-7 md:w-2/3'>
        <h2 className='font-bold text-sm md:text-xl lg:text-3xl'>
          {product.name}
        </h2>
        <p className='text-xs md:text-sm lg:text-base opacity-50'>
          {`${product.description.split('.')[0]}.`}
        </p>
        <Link href={`/product/${product._id}`} passHref>
          <button className='px-3 py-1.5 text-xs md:text-sm lg:text-base bg-amber-600 text-white hover:opacity-70'>
            See product
          </button>
        </Link>
      </span>
    </div>
  );
};

export default CategoryItem;
