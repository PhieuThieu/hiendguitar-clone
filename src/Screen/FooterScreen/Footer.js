import React, {useEffect, useState} from 'react';
import ReverseTitleContainer from "../../Component/ReverseTitleContainer/ReverseTitleContainer";
import SubmitButton from "../../Component/SubmitButton/SubmitButton";
import {Link} from "react-router-dom";

function Footer({itemsQty, price, freight, buttonName}) {
  const [sub, setSub] = useState(0);

  useEffect(() => {
    let priceNum = parseInt(price)
    let freightNum = parseInt(freight)
    setSub(priceNum + freightNum)
  },[price, freight])

  return (
    <div className='p-5 shadow-top'>
      <ReverseTitleContainer
        className='flex justify-between mb-5'
        description={`Subtotal Items (${itemsQty})`}
        titleStyle='ml-auto '
        title={`${price} $`}
      />
      <ReverseTitleContainer
        className='flex justify-between'
        description='Delivery Fee'
        title={`${freight} $`}
      />
      <div className=' border-t-[1px] my-5 border-lightSecondary '/>
      <ReverseTitleContainer
        className='flex justify-between'
        description='Total'
        title={`${sub} $`}
      />
      <Link to='/checkout'>
        <SubmitButton name={buttonName}/>
      </Link>
    </div>
  );
}

export default Footer;