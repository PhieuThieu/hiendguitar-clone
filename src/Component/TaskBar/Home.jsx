import React from 'react';
import {Link} from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';

function Home({active}) {
  return (
    <div className={`${active} px-5 py-1 `}>
      <Link to='/'>
        { active ? <HomeIcon  className='text-tertiary'/> : <HomeOutlinedIcon fontSize='small' className='text-secondary'/>}
      </Link>
    </div>
  );
}

export default Home;