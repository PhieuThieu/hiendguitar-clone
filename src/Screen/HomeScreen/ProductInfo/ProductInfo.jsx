import React from 'react';
import {Link} from "react-router-dom";
import TitleContainer from "../../../Component/TitleContainer/TitleContainer";

function ProductInfo({image, name, price, path, titleStyle}) {
  return (
    <div className='info w-full rounded-lg relative'>
      {path ? (<Link to={path}>
        <img className='rounded-lg aspect-square object-cover' src={image} alt={name}/>
        <TitleContainer title={name} description={`USD ${price}`} titleStyle={titleStyle} className='pt-2'/>
      </Link>) : (<>
        <img className='rounded-lg aspect-square object-cover' src={image} alt={name}/>
        <TitleContainer title={name} description={`USD ${price}`} titleStyle={titleStyle} className='pt-2'/></>)}
    </div>
  );
}

export default ProductInfo;