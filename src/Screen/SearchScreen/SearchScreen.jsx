import React from 'react';
import ProductInfo from "../HomeScreen/ProductInfo/ProductInfo";
import {useSelector} from "react-redux";
import {searchProduct} from "../../reduxSlice/reselect";
import {nanoid} from "nanoid";

function SearchScreen() {
    const products = useSelector(searchProduct)
  return (
    <div className='grid grid-cols-2 gap-x-7 gap-y-5 mx-5 mt-24 mb-5'>
      {products.map(product => <ProductInfo key={nanoid()} image={product.image} name={product.name} price={product.price} info={product} titleStyle='text-ellipsis whitespace-nowrap overflow-hidden'/>)}

      {/*<ProductInfo*/}
      {/*  image='https://cdn.shopify.com/s/files/1/0687/7043/products/DSC00442_23bff132-1838-4d78-998a-f866436279f7_2000x1338.jpg?v=1658014721'*/}
      {/*  name='ESP ORIGINAL M-II CTM TANZANITE E4380212'*/}
      {/*  price='4,577.99'*/}
      {/*  path='/product'*/}
      {/*  titleStyle='text-ellipsis whitespace-nowrap overflow-hidden'*/}
      {/*/>*/}
    </div>
  );
}

export default SearchScreen;