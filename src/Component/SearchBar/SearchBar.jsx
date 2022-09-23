import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch} from "react-redux";
import { searchProducts} from "../../reduxSlice/productSlice";
import {useNavigate} from "react-router-dom";

function SearchBar({className, navigateHistory}) {
  const navigate = useNavigate()
  const [value, setValue] = useState('');
  const dispatch = useDispatch()

  const handleSearch = () => {
    dispatch(searchProducts(value))
    navigateHistory && navigate(navigateHistory)
  }

  return (
    <div className={`${className} w-full bg-primary z-20`}>
      <div className='h-12 flex bg-primary w-full relative'>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          className='w-full h-full focus:text-tertiary border border-2 border-tertiary rounded-3xl pl-5 focus:outline-none placeholder:text-secondary lg:border-secondary-400 lg:focus:border-tertiary'
          placeholder='Search'
        />

        <button className='h-5/6 absolute w-1/5 md:w-24 rounded-3xl border border-solid border-2 border-tertiary bg-tertiary inset-y-1 right-1 flex justify-center lg:bg-secondary-400 lg:border-secondary-400 lg:hover:bg-tertiary lg:hover:border-tertiary' onClick={handleSearch}>
          <SearchIcon className='mx-auto my-auto text-primary '/>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
