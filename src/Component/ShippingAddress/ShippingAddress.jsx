import React from 'react';
import TitleContainer from "../TitleContainer/TitleContainer";
import CheckRadio from "../PaymentMenthod/CheckRadio";

function ShippingAddress() {
  return (
    <div className='my-5 gap-y-5'>
      <CheckRadio
        className='mb-5'
        content={<TitleContainer
          className='col-span-7'
          title='Home'
          description='285 Cách Mạng Tháng 8, 12, Quận 10'
        />}
      />
      <CheckRadio
        content={<TitleContainer
            className='col-span-7'
            title='Office'
            description='29 Đường Lê Duẩn, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh'
          />}
      />
      {/*<div className="grid grid-cols-8">*/}

      {/*  <input*/}
      {/*    className='col-span-1 ml-auto accent-tertiary'*/}
      {/*    type="radio"/>*/}
      {/*</div>*/}
      {/*<div className="grid grid-cols-8">*/}
      {/*  <TitleContainer*/}
      {/*    className='mt-5 col-span-7'*/}
      {/*    title='Office'*/}
      {/*    description='29 Đường Lê Duẩn, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh'*/}
      {/*  />*/}
      {/*  <input*/}
      {/*    className='col-span-1 ml-auto h-full accent-tertiary'*/}
      {/*    type="radio"/>*/}
      {/*</div>*/}

    </div>
  );
}

export default ShippingAddress;