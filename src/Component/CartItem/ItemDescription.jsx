import React from 'react';
import TitleContainer from "../TitleContainer/TitleContainer";
import ClearIcon from '@mui/icons-material/Clear';
import Title from "../TitleContainer/Title/Title";
import CountQuantityButton from "../CountQuantityButton/CountQuantityButton";
import {useDispatch} from "react-redux";
import {decreaseItem, increaseItem, removeItem} from "../../reduxSlice/cartSlice";

function ItemDescription({name, nameStyle, quantity, price, index, active}) {
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increaseItem(index))
  }
  const handleDecrement = () => {
    dispatch(decreaseItem(index))
  }
  const handleRemove = () => {
    dispatch(removeItem(index))
  }

  return (
    <div className='col-span-3 ml-3 grid grid-cols-8 grid-rows-2'>
      <TitleContainer
        className='col-span-6'
        title={name}
        titleStyle={nameStyle}
        description={`Qty: ${quantity}`}
        descriptionStyle='text-sm'
      />

      <ClearIcon className='ml-auto col-span-2 text-secondary' onClick={handleRemove} fontSize='small'/>
      <span className='col-span-5 mt-auto'>
        <Title element={`USD ${price}`}/>
      </span>
      <CountQuantityButton increment={handleIncrement}
                           decrement={handleDecrement}
                           quantity={quantity}
                           className='w-20 gap-x-1 mt-auto ml-auto col-span-3'
                           active={active}
      />
    </div>
  );
}

export default ItemDescription;