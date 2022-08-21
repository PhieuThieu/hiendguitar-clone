import React, {useEffect, useState} from 'react';
import ReverseTitleContainer from "../../Component/ReverseTitleContainer/ReverseTitleContainer";
import SubmitButton from "../../Component/SubmitButton/SubmitButton";

function Footer({itemsQty, price, freight, buttonName, onClick}) {
  const [sub, setSub] = useState(0);

  useEffect(() => {
    let priceNum = parseInt(price)
    let freightNum = parseInt(freight)
    setSub(priceNum + freightNum)
  }, [price, freight])

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
      <SubmitButton onClick={onClick} name={buttonName}/>
    </div>
  );
}

export default Footer;