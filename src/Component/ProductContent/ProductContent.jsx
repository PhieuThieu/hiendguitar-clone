import React from 'react';

function ProductContent({title, image}) {
  return (<div className='lg:block hidden'>
    <img src={image} alt={title}/>
  </div>);
}

export default ProductContent;