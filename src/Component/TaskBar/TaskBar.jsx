import React from 'react';
import Home from "./Home";
import Category from "./Category";
import Cart from "./Cart";
import UserInfo from "./UserInfo";

function TaskBar(props) {
  return (
    <div className='flex w-full block rounded-l justify-between mt-5 py-5 shadow-top'>
      <Home active='active'/>
      <Category/>
      <Cart/>
      <UserInfo/>
    </div>
  );
}

export default TaskBar;