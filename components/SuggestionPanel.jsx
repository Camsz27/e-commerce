import React from 'react';
import Suggestion from './Suggestion';

const SuggestionPanel = ({ suggestions }) => {
  return (
    <div className='flex flex-col md:flex-row w-3/4 mx-auto gap-x-6'>
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion._id} product={suggestion} />
      ))}
    </div>
  );
};

export default SuggestionPanel;
