import React from 'react';
import '../../App.css'

function CountQuantityButton({className, quantity, decrement, increment, active}) {

  return (
    <div className={`grid grid-cols-3 ${className}`}>
      <button onClick={decrement} className={active === false ?  'count-active' : 'count'}>-</button>
      <p className='m-auto text-tertiary font-medium'>{quantity}</p>
      <button onClick={increment} className={active === true ?  'count-active' : 'count'}>+</button>
    </div>
  );
}

export default CountQuantityButton;