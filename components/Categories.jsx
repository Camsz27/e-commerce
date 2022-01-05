import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <div className='w-5/6 mx-auto flex flex-col md:flex-row gap-8 my-10'>
      <CategoryCard instrument='guitars' />
      <CategoryCard instrument='pianos' />
      <CategoryCard instrument='drums' />
    </div>
  );
};

export default Categories;
