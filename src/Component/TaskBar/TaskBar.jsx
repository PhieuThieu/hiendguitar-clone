import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import FeaturedIcon from "../FeaturedIcon/FeaturedIcon";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {Person, ShoppingBag} from "@mui/icons-material";


function TaskBar({user}) {


  return (
    <div className='fixed bottom-0 bg-primary flex w-full block rounded-l justify-between mt-5 py-2 shadow-top'>
      <FeaturedIcon
        name='/'
        active='active'
        activeType={<HomeIcon fontSize='large' className='text-tertiary'/>}
        normalType={<HomeOutlinedIcon fontSize='medium' className='text-secondary'/>}
      />
      <FeaturedIcon
        name='search'
        normalType={<SearchIcon fontSize='large' className='text-secondary'/>}
      />
      <FeaturedIcon
        name='cart'
        activeType={<ShoppingBag fontSize='large' className='text-tertiary'/>}
        normalType={<ShoppingBagOutlinedIcon fontSize='large' className='text-secondary'/>}
      />
      <FeaturedIcon
        name={user ? 'account' : 'account/sign-in'}
        activeType={<Person fontSize='large' className='text-tertiary'/>}
        normalType={<PersonOutlineIcon fontSize='large' className='text-secondary'/>}
      />
    </div>
  );
}

export default TaskBar;