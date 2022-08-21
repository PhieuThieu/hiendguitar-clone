import React from 'react';
import CheckRadio from "./CheckRadio";
import CashWallet from "./CashWallet";
import {useSelector} from "react-redux";
import {selectPayment} from "../../reduxSlice/userSlice";
import {nanoid} from "nanoid";

function PaymentMenthod() {
  const payment = useSelector(selectPayment)

  return (<div className='my-5 space-y-5'>
      {payment.map((type, index) => (index === 0 ? <CheckRadio
          checked='checked'
          name='payment'
          key={nanoid()}
          content={<CashWallet name={type.name} url={type.url}/>}
        /> : <CheckRadio
          name='payment'
          key={nanoid()}
          content={<CashWallet name={type.name} url={type.url}/>}
        />))}
    </div>);
}

export default PaymentMenthod;

