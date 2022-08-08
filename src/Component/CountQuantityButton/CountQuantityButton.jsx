import React from 'react';
import '../../App.css'

function CountQuantityButton({className}) {
  return (
    <div className={`grid grid-cols-3 ${className}`}>
      {/*<button className={active ? 'count-active' : 'count'}>-</button>*/}
      <button className='count'>-</button>
      <p className='m-auto text-tertiary font-medium'>01</p>
      <button className='count-active'>+</button>
    </div>
  );
}

export default CountQuantityButton;