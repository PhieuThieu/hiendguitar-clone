import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';import {Link} from "react-router-dom";

function UserInfo(props) {
  return (
    <div className='px-5 py-1'>
      <Link to='/'>
        <PersonOutlineIcon fontSize='large' className='text-secondary'/>
      </Link>
    </div>
  );
}

export default UserInfo;