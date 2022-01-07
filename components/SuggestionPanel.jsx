import React from 'react';
import Suggestion from './Suggestion';

const SuggestionPanel = ({ suggestions }) => {
  return (
    <>
      <h2 className='text-center font-bold text-3xl mb-5'>YOU MAY ALSO LIKE</h2>
      <div className='flex flex-col md:flex-row w-2/3 mx-auto gap-x-6 gap-y-10'>
        {suggestions.map((suggestion) => (
          <Suggestion key={suggestion._id} product={suggestion} />
        ))}
      </div>
    </>
  );
};

export default SuggestionPanel;
