import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch} from "react-redux";
import {searchProduct} from "../../reduxSlice/productSlice";

function SearchBar() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch()

  const handleSearch = () => {
    dispatch(searchProduct({values: value}))
    console.log('dispatched')
  }

  return (
    <div className=' w-full bg-primary z-20  '>
      <div className='h-12 flex bg-primary w-full relative'>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          className='w-full h-full focus:text-tertiary border border-2 border-tertiary rounded-3xl pl-5 focus:outline-none placeholder:text-secondary'
          placeholder='Search'
        />

        <button className='h-5/6 absolute w-1/5 sm:w-36 rounded-3xl border border-solid border-2 border-tertiary bg-tertiary inset-y-1 right-1 flex justify-center' onClick={handleSearch}>
          <SearchIcon className='mx-auto my-auto text-primary'/>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;