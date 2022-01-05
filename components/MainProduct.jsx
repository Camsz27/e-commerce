import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MainProduct = () => {
  return (
    <div className='w-full bg-black flex justify-center pb-10'>
      <Image
        src={'/mainImage.jpeg'}
        alt='PRS Guitar'
        width={1900}
        height={800}
        className='mx-auto w-5/6'
      />
      <div className='text-white absolute top-40 md:top-1/4 lg:top-1/3 left-10 md:left-32 lg:left-56 w-1/2 space-y-2'>
        <h1 className='font-bold text-sm md:text-xl lg:text-3xl'>
          PRS Custom 24 Carved Figured Maple Top
        </h1>
        <p className='text-xs md:text-sm lg:text-base opacity-90'>
          The Custom 24 is the quintessential PRS guitar.
        </p>
        <Link href={'/product/61d4ca68e48c22cee72bd1b5'} passHref>
          <button className='bg-amber-600 px-3 py-1.5 text-xs md:text-sm lg:text-base'>
            See product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainProduct;
