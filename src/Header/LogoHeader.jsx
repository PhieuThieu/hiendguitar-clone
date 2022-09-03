import React from 'react';

function LogoHeader({helloText}) {
  return (
    <div className='my-5 w-full h-8 flex justify-between lg:hidden'>
      <h4 className='text-xl tracking-tighter font-bold font-mono'>{helloText}</h4>
      <img className='h-11/12 w-1/2 ' src="https://cdn.shopify.com/s/files/1/0687/7043/files/HIENDGUITAR_LOGO_326x40.jpg?v=1632457234" alt=""/>
    </div>
  );
}

export default LogoHeader;