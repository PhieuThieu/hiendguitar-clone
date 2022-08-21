import React from 'react';

function Description({className, element}) {
  return (
    <div className='text-secondary'>
      <div className={className}>{element}</div>
    </div>
  );
}

export default Description;