import React from 'react';

function ProductContent({title, image}) {
  return (<div>
    <img src={image} alt={title}/>
  </div>);
}

export default ProductContent;