import React from 'react';
import ItemDescription from "./ItemDescription";

function CartItem({image, name, price, quantity}) {
  return (
    <div className='h-full grid grid-cols-4 mb-8'>
      <img className='rounded-xl object-cover h-full' src={image} alt=""/>
      <ItemDescription
        name={name}
        price={price}
        quantity={quantity}
        nameStyle='text-ellipsis whitespace-nowrap overflow-hidden font-medium'
      />
    </div>
  );
}

export default CartItem;