import React from 'react';
import CartItem from "../../Component/CartItem/CartItem";

function CartScreen() {
  return (
    <div className='px-5 mt-24 relative h-[calc(100vh+30px)]'>
      <div className='mt-16'>
        <CartItem
          image='https://cdn.shopify.com/s/files/1/0687/7043/products/DSC00442_23bff132-1838-4d78-998a-f866436279f7_2000x1338.jpg?v=1658014721'
          name='ESP ORIGINAL M-II CTM TANZANIA E4380212'
          price='4,577.99'
          quantity='1'
        />
        <CartItem
          image='https://cdn.shopify.com/s/files/1/0687/7043/products/DSC09391_a4784421-10ec-4ea6-8844-572722f73a40_2000x1334.jpg?v=1653520607'
          name='PRS 35th Anniversary Custom 24 '
          price='4,308.99'
          quantity='1'
        />

      </div>
    </div>
  );
}

export default CartScreen;