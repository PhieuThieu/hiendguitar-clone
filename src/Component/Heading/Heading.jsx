import React from 'react';
import BackArrow from "./BackArrow";
import ScreenTitles from "./ScreenTitles";

function Heading({title}) {
  return (
    <div className='fixed top-0 z-10 bg-primary w-full p-5'>
      <div className="flex relative justify-center">
        <BackArrow/>
        <ScreenTitles title={title}/>
      </div>
    </div>
  );
}

export default Heading;