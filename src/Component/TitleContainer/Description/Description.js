import React from 'react';

function Description({style, element}) {
  return (
    <div className='text-secondary'>
      <div className={style}>{element}</div>
    </div>
  );
}

export default Description;