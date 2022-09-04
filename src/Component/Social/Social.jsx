import React from 'react';
import SgvIcon from "../SgvIcon/SgvIcon";
import {useSelector} from "react-redux";
import {selectSocials} from "../../reduxSlice/footerSlice";
import {nanoid} from "nanoid";

function Social() {
  const socials = useSelector(selectSocials)

  return (
    <div className='flex justify-center'>
      {socials.map(social => <div key={nanoid()} className='mx-3'>
        <div className='cursor-pointer'>
          <SgvIcon sgvStyle='fill-primary' viewBox="0 0 30 30" paths={[social]}/>
        </div>
      </div>)}
    </div>
  );
}

export default Social;