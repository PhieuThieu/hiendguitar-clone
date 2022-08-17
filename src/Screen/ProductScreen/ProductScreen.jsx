import React from 'react';
import ProductInfo from "../HomeScreen/ProductInfo/ProductInfo";
import ProductDescription from "./ProductDescription";
import ProductSpecification from "./ProductSpecification";
import {useSelector} from "react-redux";
import {selectProductInfo} from "../../reduxSlice/productSlice";

function ProductScreen() {
  const info = useSelector(selectProductInfo)

  return (<div className='mx-5 mt-24 mb-40'>
    {/*    <ProductInfo*/}
    {/*      image='https://cdn.shopify.com/s/files/1/0687/7043/products/DSC00442_23bff132-1838-4d78-998a-f866436279f7_2000x1338.jpg?v=1658014721'*/}
    {/*      name='ESP ORIGINAL M-II CTM TANZANITE E4380212'*/}
    {/*      price='4,577.99'*/}
    {/*    />*/}
    {/*    <ProductDescription title='Product Description'*/}
    {/*                        description='Made in ESP’s Tokyo factory by our expert luthiers, the ESP M-II is a neck-thru-body speed demon that can handle the most intricate solos and punishing riffs you can create, and come back for more.'/>*/}
    {/*    <ProductSpecification description='BODY Alder (Thickness 45mm)*/}
    {/*NECK Hard Maple 3P*/}
    {/*GRIP SHAPE Thin U*/}
    {/*FINGERBOARD Ebony w / White Binding*/}
    {/*RADIUS 305R*/}
    {/*SCALE 648mm*/}
    {/*NUT Lock Nut (42mm / R2)*/}
    {/*FRET JESCAR FW57110-NS, 24frets*/}
    {/*INLAY Offset Pearloid Block*/}
    {/*JOINT Neck-thru-body*/}
    {/*TUNER GOTOH SG360-07 MG-T*/}
    {/*BRIDGE Floyd Rose*/}
    {/*PICKUPS EMG het set*/}
    {/*PARTS COLOR Black*/}
    {/*CONTROLS Master Volume, Master Tone, 3WAY Lever PU Selector*/}
    {/*SET STRING .009-.042 (Elixir®)'*/}
    {/*    />*/}
    <ProductInfo image={info.image} name={info.name} price={info.price}/>
    <ProductDescription description={info.description}/>
    <ProductSpecification description={info.specification}/>
  </div>);
}

export default ProductScreen;