import React from 'react';
import TitleContainer from "../TitleContainer/TitleContainer";
import ClearIcon from '@mui/icons-material/Clear';
import Title from "../TitleContainer/Title/Title";
import CountQuantityButton from "../CountQuantityButton/CountQuantityButton";

function ItemDescription({name, nameStyle, quantity, price}) {
  return (
    <div className='col-span-3 ml-3 grid grid-cols-8 grid-rows-2'>
      <TitleContainer
        className='col-span-6'
        title={name}
        titleStyle={nameStyle}
        description={`Qty: ${quantity}`}
        descriptionStyle='text-sm'
      />
      <ClearIcon className='ml-auto col-span-2 text-secondary' fontSize='small'/>
      <span className='col-span-5 mt-auto'>
        <Title element={`USD ${price}`}/>
      </span>
      <CountQuantityButton className='w-20 gap-x-1 mt-auto ml-auto col-span-3'/>
    </div>
  );
}

export default ItemDescription;