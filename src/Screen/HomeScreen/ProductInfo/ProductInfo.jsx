import React from 'react';
import {useNavigate} from "react-router-dom";
import TitleContainer from "../../../Component/TitleContainer/TitleContainer";
import {useDispatch} from "react-redux";
import {setInfo} from '../../../reduxSlice/productSlice'

function ProductInfo({image, name, price ,titleStyle, info, descriptionStyle}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(setInfo(info))
    navigate('/product')
  }

  return (
    <div className='info w-full rounded-lg relative lg:p-4'>
      <div onClick={handleClick}>
        <img className='rounded-lg aspect-square object-cover' src={image} alt={name}/>
        <TitleContainer title={name} description={`USD ${price}`} titleStyle={titleStyle} className='pt-2' descriptionStyle={descriptionStyle}/>
      </div>
    </div>
  );
}

export default ProductInfo;