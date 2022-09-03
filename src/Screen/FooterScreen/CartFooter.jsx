import React from 'react';
import Footer from "../FooterScreen/Footer";
import {useSelector} from "react-redux";
import {totalCartPrice, totalQuantity} from "../../reduxSlice/reselect";
import {useNavigate} from "react-router-dom";

function CartFooter() {
  const totalPrice = useSelector(totalCartPrice)
  const totalQty = useSelector(totalQuantity)
  const navigate = useNavigate()

  const handleCheckOut = () => {
    navigate('/checkout')
  }

  return (
    <div
      className='fixed z-10 bg-primary bottom-0 w-full lg:relative lg:border border-secondary-400 lg:rounded-xl lg:z-0'>
      <Footer
        onClick={handleCheckOut}
        itemsQty={totalQty}
        price={totalPrice}
        freight='5'
        buttonName='Go to Payment'
      />
    </div>
  );
}

export default CartFooter;