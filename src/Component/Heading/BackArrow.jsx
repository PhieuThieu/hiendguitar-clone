import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from "react-router-dom";

function BackArrow({link, onClick}) {
  return (
    <div className='absolute left-0 h-full ' onClick={onClick}>
      {/*<Link to={link ? link : '/'}>*/}
        <ArrowBackIcon className='text-secondary' sx={{height: '100%'}}/>
      {/*</Link>*/}
    </div>
  );
}

export default BackArrow;