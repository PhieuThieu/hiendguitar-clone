import React from 'react';

function CashWallet({name, url}) {
  return (
    <div className='flex'>
      <img className='object-contain h-7 w-7' src={url} alt=""/>
      <p className='pl-2 font-medium text-base my-auto'>{name}</p>
    </div>
  );
}

export default CashWallet;