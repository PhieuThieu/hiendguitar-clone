import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BackArrow({ onClick}) {
  return (
    <div className='absolute left-0 h-full ' onClick={onClick}>
        <ArrowBackIcon className='text-secondary' sx={{height: '100%'}}/>
    </div>
  );
}

export default BackArrow;