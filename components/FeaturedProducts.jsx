import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedProducts = ({ products }) => {
  const [guitar, piano, drum] = products;
  return (
    <div className='w-5/6 mx-auto space-y-14 mb-20'>
      <div className='bg-neutral-100 flex flex-col md:flex-row items-center gap-y-4 pb-3 md:pb-0 rounded-xl'>
        <Image
          src={guitar.photos[0]}
          alt={guitar.name}
          width={450}
          height={500}
          className='mix-blend-multiply'
        />
        <span className='space-y-4 flex flex-col items-center w-5/6'>
          <h1 className='font-bold text-sm md:text-xl lg:text-3xl'>
            {guitar.name}
          </h1>
          <p className='text-xs md:text-sm lg:text-base opacity-90'>
            {guitar.description.slice(0, 144)}
          </p>
          <Link href={`/product/${guitar._id}`} passHref>
            <button className='px-3 py-1.5 text-xs md:text-sm lg:text-base border-2 border-amber-600 text-amber-600 hover:text-white hover:bg-amber-600 hover:border-white'>
              See product
            </button>
          </Link>
        </span>
      </div>
      <div className='bg-neutral-100 flex flex-col md:flex-row-reverse items-center gap-y-4 md:pl-4 pb-3 md:pb-0 rounded-xl'>
        <Image
          src={piano.photos[0]}
          alt={piano.name}
          width={450}
          height={500}
          className='mix-blend-multiply'
        />
        <span className='space-y-4 flex flex-col items-center w-5/6'>
          <h1 className='font-bold text-sm md:text-xl lg:text-3xl'>
            {piano.name}
          </h1>
          <p className='text-xs md:text-sm lg:text-base opacity-90'>
            {piano.description.slice(0, 108)}
          </p>
          <Link href={`/product/${piano._id}`} passHref>
            <button className='px-3 py-1.5 text-xs md:text-sm lg:text-base border-2 border-amber-600 text-amber-600 hover:text-white hover:bg-amber-600 hover:border-white'>
              See product
            </button>
          </Link>
        </span>
      </div>
      <div className='bg-neutral-100 flex flex-col md:flex-row items-center gap-y-4 pb-3 md:pb-0 rounded-xl md:pr-3'>
        <Image
          src={drum.photos[0]}
          alt={drum.name}
          width={450}
          height={500}
          className='mix-blend-multiply'
        />
        <span className='space-y-4 flex flex-col items-center w-5/6'>
          <h1 className='font-bold text-sm md:text-xl lg:text-3xl'>
            {drum.name}
          </h1>
          <p className='text-xs md:text-sm lg:text-base opacity-90'>
            {drum.description.slice(0, 81)}
          </p>
          <Link href={`/product/${drum._id}`} passHref>
            <button className='px-3 py-1.5 text-xs md:text-sm lg:text-base border-2 border-amber-600 text-amber-600 hover:text-white hover:bg-amber-600 hover:border-white'>
              See product
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default FeaturedProducts;
