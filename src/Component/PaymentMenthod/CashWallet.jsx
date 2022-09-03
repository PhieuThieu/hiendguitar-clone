import React from 'react';

function CashWallet({name, url}) {
  return (
    <div className='flex cursor-pointer'>
      <img className='object-contain h-7 w-7 lg:h-7 lg:w-7 rounded-md' src={url} alt=""/>
      <p className='pl-2 font-medium text-base my-auto'>{name}</p>
    </div>
  );
}

export default CashWallet;