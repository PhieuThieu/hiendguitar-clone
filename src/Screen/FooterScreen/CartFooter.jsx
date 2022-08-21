import React from 'react';
import Footer from "../FooterScreen/Footer";
import {useSelector} from "react-redux";
import {totalCartPrice, totalQuantity} from "../../reduxSlice/reselect";
import {useNavigate} from "react-router-dom";

function CartFooter() {
  const totalPrice = useSelector(totalCartPrice)
  const totalQty= useSelector(totalQuantity)
  const navigate = useNavigate()

  const handleCheckOut = () => {
    navigate('/checkout')
  }


  return (
    <div className='fixed z-10 bg-primary bottom-0 w-full'>
      <Footer
        onClick={handleCheckOut}
        itemsQty={totalQty}
        price={totalPrice}
        freight='5'
        buttonName='GotoPayment'
      />
    </div>
  );
}

export default CartFooter;