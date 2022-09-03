import React from 'react';
import CashWallet from "../PaymentMenthod/CashWallet";
import {useSelector} from "react-redux";
import {selectPayment} from "../../reduxSlice/userSlice";
import Description from "../TitleContainer/Description/Description";
import {nanoid} from "nanoid";

function PaymentAccepted() {
  const payment = useSelector(selectPayment)

  return (
    <div className='ml-auto'>
      <Description element='Payment Menthods Accepted' className='text-primary text-sm'/>
      <div className='flex justify-start mt-2 pl-10'>
        {payment.map(v => <CashWallet key={nanoid()} url={v.url}/>)}
      </div>
    </div>
  );
}

export default PaymentAccepted;