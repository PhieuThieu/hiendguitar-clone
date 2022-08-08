import React from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';import {Link} from "react-router-dom";

function Cart({active}) {
  return (
    <div className={`${active} px-5 py-1 `}>
      <Link to='/cart'>
        <ShoppingBagOutlinedIcon fontSize='large' className='text-secondary'/>
      </Link>
    </div>
  );
}

export default Cart;