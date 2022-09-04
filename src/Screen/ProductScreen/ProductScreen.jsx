import React from 'react';
import ProductInfo from "../HomeScreen/ProductInfo/ProductInfo";
import ProductDescription from "./ProductDescription";
import ProductSpecification from "./ProductSpecification";
import {useSelector} from "react-redux";
import {selectProductInfo} from "../../reduxSlice/productSlice";
import Header from "../../Header/Header";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import ProductContent from "../../Component/ProductContent/ProductContent";
import ProductFooter from "../FooterScreen/ProductFooter";
import Title from "../../Component/TitleContainer/Title/Title";

function ProductScreen() {
  const info = useSelector(selectProductInfo)

  return (<div className='mt-24 mb-40 lg:mx-auto max-w-screen-lg lg:mt-0'>
    <Header/>
    <div className='pt-24 lg:block hidden'>
      <Breadcrumb type={info.name}/>
    </div>
    <div className="lg:grid lg:grid-cols-3">
      <div className="lg:mx-0 mx-5 col-span-2">
        <span className='lg:hidden block'><ProductInfo image={info.image} name={info.name} price={info.price}/></span>
        <ProductContent title={info.name} image={info.image}/>
        <ProductDescription description={info.description}/>
        <ProductSpecification description={info.specification}/>
      </div>
      <div className="col-span-1">
        <div className='px-5 lg:block hidden'><Title element={info.name}/></div>
        <ProductFooter/>
      </div>
    </div>
  </div>);
}

export default ProductScreen;