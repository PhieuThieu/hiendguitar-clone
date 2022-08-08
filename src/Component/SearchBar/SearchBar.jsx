import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";

function SearchBar() {
  return (
    <div  className='my-5 h-10 flex relative'>
      <input
        className='w-full h-full focus:text-tertiary border border-2 border-tertiary rounded-3xl pl-5 focus:outline-none placeholder:text-secondary'
        placeholder='Search'
      />

      <Link className='my-auto inset-y-0 h-5/6 absolute w-1/5 sm:w-36 rounded-3xl flex right-1 border border-solid border-2 border-tertiary bg-tertiary' to='/search'>
          <SearchIcon className='mx-auto my-auto text-primary'/>
        </Link>
    </div>
  );
}

export default SearchBar;