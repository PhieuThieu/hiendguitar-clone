import React from 'react';
import {Link} from "react-router-dom";

function Information({user}) {
  return (<div className=' flex col-span-1 ml-auto gap-x-2 col-start-11'>
    <Link to={user ? '/account' : '/account/sign-in'}>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48"
           className='fill-secondary-400 hover:fill-tertiary'
           viewBox="0 0 100 100">
        <path d="M80,71.2V74c0,3.3-2.7,6-6,6H26c-3.3,0-6-2.7-6-6v-2.8c0-7.3,8.5-11.7,16.5-15.2c0.3-0.1,0.5-0.2,0.8-0.4
			        c0.6-0.3,1.3-0.3,1.9,0.1C42.4,57.8,46.1,59,50,59c3.9,0,7.6-1.2,10.8-3.2c0.6-0.4,1.3-0.4,1.9-0.1c0.3,0.1,0.5,0.2,0.8,0.4
			        C71.5,59.5,80,63.9,80,71.2z"/>
        <ellipse cx="50" cy="36.5" rx="14.9" ry="16.5"/>
      </svg>
    </Link>
    <Link to='/cart'>
      <svg width="40" height="40" viewBox="0 -50 512 512" xmlns="http://www.w3.org/2000/svg"
      className='fill-secondary-400 hover:fill-tertiary'>
        <circle cx="176" cy="416" r="32"/>
        <circle cx="400" cy="416" r="32"/>
        <polygon
          points="167.78 304 429.12 304 467.52 112 133.89 112 125.42 64 32 64 32 96 98.58 96 146.58 368 432 368 432 336 173.42 336 167.78 304"/>
      </svg>
    </Link>
  </div>);
}

export default Information;