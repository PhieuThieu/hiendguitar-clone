import React from 'react';
import Btn from "./Btn";

function CategoryBar() {

  return (
    <div className='my-5 h-10 w-full block overflow-x-scroll overflow-y-hidden '>
      <Btn
        name='All'
        active='btn-active'
      />
      <Btn
        name='Electric'
      />
      <Btn
        name='Acoustic'
      />
      <Btn
        name='Bass'
      />
      <Btn
        name='Other'
      />
    </div>
  );
}

export default CategoryBar;