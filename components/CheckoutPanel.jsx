import React, { useState } from 'react';
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';

const CheckoutPanel = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  return (
    <div className='bg-white w-5/6 mx-auto md:w-2/3 rounded-xl px-4 md:px-7 py-5 space-y-6'>
      <h2 className='font-bold text-xl md:text-2xl uppercase'>Checkout</h2>

      <h3 className='uppercase text-amber-600 font-medium'>
        Customer Information
      </h3>
      <div className='w-11/12 mx-auto flex flex-col md:flex-row flex-wrap gap-x-10 gap-y-4'>
        <span className='flex flex-col gap-y-2 md:w-2/5 w-full'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' required />
        </span>
        <span className='flex flex-col gap-y-2 md:w-2/5 w-full'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' id='email' required />
        </span>
        <span className='flex flex-col gap-y-2 md:w-2/5 w-full'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            type='tel'
            name='phone'
            id='phone'
            required
            placeholder='123-4567-8901'
          />
        </span>
      </div>
      <div>
        <h3 className='uppercase text-amber-600 font-medium'>
          Shipping Information
        </h3>
        <div className='w-11/12 mx-auto flex flex-col md:flex-row flex-wrap gap-x-10 gap-y-4'>
          <span className='flex flex-col gap-y-2 md:w-2/5 w-full'>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              name='address'
              id='address'
              required
              placeholder='25 North Pearl Lane'
            />
          </span>
          <span className='flex flex-col gap-y-2 md:w-2/5 w-full'>
            <label htmlFor='zipCode'>Zip Code</label>
            <input
              type='text'
              name='zipCode'
              id='zipCode'
              required
              placeholder='11111'
            />
          </span>
          <span className='flex flex-col gap-y-2 md:w-2/5 w-full'>
            <label htmlFor='phone'>Country</label>
            <CountryDropdown
              value={country}
              onChange={(val) => setCountry(val)}
              required
              classes='location'
            />
          </span>
          <span className='flex flex-col gap-y-2 md:w-2/5 w-full'>
            <label htmlFor='phone'>State</label>
            <RegionDropdown
              country={country}
              value={region}
              onChange={(val) => setRegion(val)}
              required
              classes='location'
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPanel;
