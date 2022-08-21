import React, {useState} from 'react';
import Footer from "../FooterScreen/Footer";
import {useSelector} from "react-redux";
import {totalCartPrice, totalQuantity} from "../../reduxSlice/reselect";
import {useNavigate} from "react-router-dom";
import SuccessSubmit from "./SuccessSubmit";

function CheckOutFooter({user}) {
  const totalPrice = useSelector(totalCartPrice)
  const totalQty = useSelector(totalQuantity)
  const navigate = useNavigate()
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    if (user) {
      setSuccess(true)
      setTimeout(() => navigate('/'), 300)
    } else {
      navigate('/account/sign-in')
    }
  }

  return (
    <div className='fixed z-10 bg-primary bottom-0 w-full'>
      <SuccessSubmit content='Payment is Successful.' active={success}/>
      <Footer
        onClick={handlePayment}
        itemsQty={totalQty}
        price={totalPrice}
        freight='5'
        buttonName='Checkout'
      />
    </div>
  );
}

export default CheckOutFooter;