import React from 'react';
import CartItem from "../../Component/CartItem/CartItem";
import {useSelector} from "react-redux";
import {selectCart} from "../../reduxSlice/cartSlice";
import {nanoid} from "nanoid";
import CartFooter from "../FooterScreen/CartFooter";
import Header from "../../Header/Header";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";

function CartScreen() {
  const items = useSelector(selectCart)

  return (
    <div className='mx-auto max-w-screen-lg'>
      <Header/>
      <div className="max-w-screen-lg">
        <div className='pt-24 lg:block hidden'>
          <Breadcrumb type='Cart'/>
        </div>
        <div className="lg:grid grid-cols-3 gap-x-2">
          <div className="px-5 mt-24 relative mb-64 lg:my-0 col-span-2">
            <div className='mt-16 lg:mt-0'>
              {items.map((item, index) => <CartItem key={nanoid()} index={index} image={item.image}
                                                    quantity={item.quantity} name={item.name} active={item.active}
                                                    price={item.price}/>)}
            </div>
          </div>
          <div className="col-span-1">
            <CartFooter/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;