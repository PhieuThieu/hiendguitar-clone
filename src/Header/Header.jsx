import React from 'react';
import SearchBar from "../Component/SearchBar/SearchBar";
import Information from "./Infomation/Information";
import {Link} from "react-router-dom";

function Header({user}) {
  return (
    <div className='lg:grid grid-cols-11 py-10 bg-primary fixed z-10 max-w-screen-lg hidden ' >
      <Link className='col-span-2 my-auto' to='/'>
        <img className='h-10 ' src="https://cdn.shopify.com/s/files/1/0687/7043/files/HIENDGUITAR_LOGO_326x40.jpg?v=1632457234" alt=""/>
      </Link>
      <SearchBar navigateHistory='/' className='col-span-6 col-start-4 mx-auto w-11/12 '/>
      <Information user={user}/>
    </div>
  );
}

export default Header;