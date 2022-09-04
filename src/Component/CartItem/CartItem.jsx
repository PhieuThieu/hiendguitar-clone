import React from 'react';
import ItemDescription from "./ItemDescription";

function CartItem({image, name, price, quantity, index, active}) {

  return (
    <div className=' grid grid-cols-4 mb-8'>
      <img className='rounded-xl object-cover h-full aspect-square col-span-1' src={image} alt=""/>
      <ItemDescription
        index={index}
        name={name}
        price={price}
        quantity={quantity}
        active={active}
        nameStyle='text-ellipsis whitespace-nowrap overflow-hidden font-medium'
      />
    </div>
  );
}

export default CartItem;