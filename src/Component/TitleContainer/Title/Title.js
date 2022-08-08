import React from 'react';

function Title({style, element}) {
  return (<div className='font-bold '>
    <div className={style}>{element}</div>
  </div>);
}

export default Title;