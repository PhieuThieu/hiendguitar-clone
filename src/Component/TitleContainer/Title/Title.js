import React from 'react';

function Title({className, element}) {
  return (<div className='font-bold '>
    <div className={className}>{element}</div>
  </div>);
}

export default Title;