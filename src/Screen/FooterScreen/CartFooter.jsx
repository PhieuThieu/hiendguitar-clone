import React from 'react';
import Footer from "../FooterScreen/Footer";

function CartFooter() {
  return (
    <div className='fixed z-10 bg-primary bottom-0 w-full'>
      <Footer
        itemsQty='2'
        price='8886'
        freight='5'
        buttonName='GotoPayment'
      />
    </div>
  );
}

export default CartFooter;