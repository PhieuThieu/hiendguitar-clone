import React, {useState} from 'react';
import '../../App.css'
import {useDispatch} from "react-redux";
import {counterDecrement, counterIncrement} from "../../reduxSlice/productSlice";

function CountQuantityButton({className, quantity}) {
  const [active, setActive] = useState(true);
  const dispatch = useDispatch()

  const handleDecrement = () => {
    dispatch(counterDecrement())
    setActive(false)
  }
  const handleIncrement = () => {
    dispatch(counterIncrement())
    setActive(true)
  }

  return (
    <div className={`grid grid-cols-3 ${className}`}>
      {/*<button className={active ? 'count-active' : 'count'}>-</button>*/}
      <button onClick={handleDecrement} className={!active ? 'count-active' : 'count'}>-</button>
      <p className='m-auto text-tertiary font-medium'>{quantity}</p>
      <button onClick={handleIncrement} className={active ? 'count-active' : 'count'}>+</button>
    </div>
  );
}

export default CountQuantityButton;