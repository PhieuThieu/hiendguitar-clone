import React from 'react';
import {Link} from "react-router-dom";

function Breadcrumb({type, item}) {
  return (
    <div className='flex pt-10 pb-3 border-b border-tertiary mb-7'>
      <span className='after:content-["/"] after:px-1'>
        <Link to='/'>Home</Link>
      </span>
      <span>
        <Link to='/'>{type}</Link>
      </span>
      {item && <span className='before:content-["/"] before:px-1'>
        {item}
      </span>}

    </div>
  );
}

export default Breadcrumb;