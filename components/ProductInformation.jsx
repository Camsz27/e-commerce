import React, { useState } from 'react';
import Image from 'next/image';

const ProductInformation = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className='space-y-20'>
      <div className='flex flex-col md:flex-row items-center w-2/3 mx-auto justify-between gap-y-6'>
        <span className='md:w-5/12 w- bg-neutral-100'>
          <Image
            src={product.photos[0]}
            width={650}
            height={700}
            alt={product.name}
            className='mix-blend-multiply'
          />
        </span>
        <span className='md:w-2/5 text-center md:text-left space-y-3 md:space-y-6'>
          <h1 className='font-bold text-xl md:text-3xl'>{product.name}</h1>
          <p className='opacity-60'>{`${
            product.description.split('.')[0]
          }.`}</p>
          <h3 className='font-bold text-xl md:text-2xl'>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(product.price)}
          </h3>
          <span className='flex items-center gap-x-3 flex-col md:flex-row gap-y-4'>
            <span className='flex items-center gap-x-3'>
              <button
                className='border-2 border-gray-400 rounded-xl p-1.5 hover:scale-110'
                onClick={() => setQuantity((prev) => prev - 1)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-400'
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
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 stroke-gray-400'
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
            <button className='md:ml-10 px-5 py-2 text-sm lg:text-base bg-amber-600 text-white hover:opacity-70'>
              Add to cart
            </button>
          </span>
        </span>
      </div>
      <div className='flex flex-col md:flex-row w-2/3 mx-auto gap-x-16 gap-y-7 justify-between text-sm md:text-base'>
        <section className='md:w-2/3 space-y-5'>
          <h2 className='text-2xl font-bold'>Description</h2>
          <p className='leading-6'>{product.description}</p>
        </section>
        <aside className='md:w-1/3 space-y-5'>
          <h2 className='text-2xl font-bold'>Features</h2>
          <ul className='list-disc space-y-2'>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </aside>
      </div>
      <div className='w-2/3 mx-auto flex flex-wrap justify-between gap-y-8'>
        {product.photos.map((photo, index) => (
          <Image
            src={photo}
            width={500}
            height={500}
            alt={product.name}
            key={index}
            className='w-1/2'
          />
        ))}
      </div>
    </div>
  );
};

export default ProductInformation;
