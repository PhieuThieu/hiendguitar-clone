import React from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {Link} from "react-router-dom";

function Category(props) {
  return (
    <div className='px-5 py-1 '>
      <Link to='/'>
        <FormatListBulletedIcon fontSize='large' className='text-secondary'/>
      </Link>
    </div>
  );
}

export default Category;