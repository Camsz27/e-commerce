import React from 'react';
import Image from 'next/image';

const BottomMessage = () => {
  return (
    <div className='w-5/6 mx-auto flex flex-col-reverse md:flex-row gap-y-5 pb-14 items-center md:justify-between'>
      <div className='md:w-1/2 font-medium space-y-5 text-center md:text-left'>
        <h2 className='text-4xl text-black tracking-wider'>
          BRINGING YOU THE <strong className='text-amber-600'>BEST</strong>{' '}
          INSTRUMENTS
        </h2>
        <p className='text-base opacity-60'>
          Located at the heart of New York City, Astrument is the premier store
          for high end guitars, pianos, drums, and music accessories. We have a
          large showroom and luxury demonstration rooms available for you to
          browse and experience a wide range of our products. Stop by our store
          to meet some of the fantastic people who make Astrument the best place
          to buy your instruments.
        </p>
      </div>
      <Image src={'/footerImage.jpeg'} alt='guitar' width={400} height={600} />
    </div>
  );
};

export default BottomMessage;
