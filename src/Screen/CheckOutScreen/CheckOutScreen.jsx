import React from 'react';
import Title from "../../Component/TitleContainer/Title/Title";
import ShippingAddress from "../../Component/ShippingAddress/ShippingAddress";
import PaymentMenthod from "../../Component/PaymentMenthod/PaymentMenthod";

function CheckOutScreen() {
  return (
    <div className='px-5 mt-24 relative h-[calc(100vh+30px)]'>
      <Title element='Shipping to' className='font-medium text-lg'/>
      <ShippingAddress/>
      <Title element='Payment Menthod' className='font-medium text-lg'/>
      <PaymentMenthod/>
    </div>
  );
}

export default CheckOutScreen;