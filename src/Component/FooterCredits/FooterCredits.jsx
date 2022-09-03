import React from 'react';
import Description from "../TitleContainer/Description/Description";
import {Link} from "react-router-dom";

function FooterCredits() {
  return (
    <div>
      <div className="flex">
        <Description element='Copyright © 2022 ' className='text-primary text-sm'/>
        <Link to='/'>
          <Description element='HIENDGUITAR.' className='text-primary text-sm ml-0.5 hover:underline'/>
        </Link>
      </div>
      <Description element='Website is built and designed by Hiendguitar. ' className='text-primary text-sm'/>
      <Description element='Contact us if you want to build superweb' className='text-primary text-sm'/>
    </div>
  );
}

export default FooterCredits;