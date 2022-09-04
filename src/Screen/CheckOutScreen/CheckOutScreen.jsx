import React from 'react';
import Title from "../../Component/TitleContainer/Title/Title";
import ShippingAddress from "../../Component/ShippingAddress/ShippingAddress";
import PaymentMenthod from "../../Component/PaymentMenthod/PaymentMenthod";
import CheckOutFooter from "../FooterScreen/CheckOutFooter";
import Header from "../../Header/Header";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";

function CheckOutScreen({user}) {
  return (
    <div className='mx-auto max-w-screen-lg'>
      <Header/>
      <div className='pt-24 lg:block hidden'>
        <Breadcrumb type='Cart' item='CheckOut'/>
      </div>
      <div className='lg:grid grid-cols-3'>
        <div className='px-5 mt-24 relative lg:mt-0 lg:h-auto lg:col-span-2'>
          <Title element='Shipping to' className='font-medium text-lg'/>
          <ShippingAddress/>
          <Title element='Payment Menthod' className='font-medium text-lg'/>
          <PaymentMenthod/>
        </div>
       <div className="col-span-1">
         <CheckOutFooter user={user}/>
       </div>
      </div>
    </div>
  );
}

export default CheckOutScreen;