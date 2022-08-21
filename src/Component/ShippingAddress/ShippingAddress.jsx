import React from 'react';
import TitleContainer from "../TitleContainer/TitleContainer";
import CheckRadio from "../PaymentMenthod/CheckRadio";
import {useSelector} from "react-redux";
import {selectAddress} from "../../reduxSlice/userSlice";
import {nanoid} from "nanoid";

function ShippingAddress() {
  const address = useSelector(selectAddress)
  return (
    <div className='my-5 gap-y-5'>
      {address.map((type, index) => (
        index === 0 ? <CheckRadio
          checked='checked'
          name='address'
          key={nanoid()}
          className='mb-5'
          content={<TitleContainer
            className='col-span-7'
            title={type.type}
            description={type.address}
          />}
        /> : <CheckRadio
        name='address'
        key={nanoid()}
        className='mb-5'
        content={<TitleContainer
        className='col-span-7'
        title={type.type}
        description={type.address}
        />}
        />
      ))}
    </div>
  );
}

export default ShippingAddress;