import React from 'react';
import ProductInfo from "../HomeScreen/ProductInfo/ProductInfo";
import ProductDescription from "./ProductDescription";
import ProductSpecification from "./ProductSpecification";
import {useSelector} from "react-redux";
import {selectProductInfo} from "../../reduxSlice/productSlice";

function ProductScreen() {
  const info = useSelector(selectProductInfo)

  return (<div className='mx-5 mt-24 mb-40'>
    <ProductInfo image={info.image} name={info.name} price={info.price}/>
    <ProductDescription description={info.description}/>
    <ProductSpecification description={info.specification}/>
  </div>);
}

export default ProductScreen;