import React from 'react';

function ScreenTitles({title, child, image}) {
  return (<>
      {child ? <div className='w-11/12 ml-auto'>{child}</div> : <div className='my-auto text-tertiary font-bold	text-xl'>
        {image && <img className='w-1/3' src={image} alt="webLogo"/>}
        {title}
      </div>}
  </>

  );
}

export default ScreenTitles;