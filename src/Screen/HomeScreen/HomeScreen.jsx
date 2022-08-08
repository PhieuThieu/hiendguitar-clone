import React from 'react';
import SliderImage from "./SliderImage/SliderImage";
import CategoryBar from "./CategoryBar/CategoryBar";
import ProductInfo from "./ProductInfo/ProductInfo";
import TaskBar from "../../Component/TaskBar/TaskBar";
import {Link} from "react-router-dom";

function HomeScreen() {
  return (
    <div className='px-5'>
      <SliderImage/>
      <CategoryBar/>
      <div className="flex justify-between mb-4">
        <h2 className='font-bold text-xl'>New Arrival</h2>
        <Link to='/'>
          <p className='font-medium'>See All</p>
        </Link>
      </div>
      <div className='grid grid-cols-2 gap-x-6 gap-y-4 '>
        <ProductInfo
          image='https://cdn.shopify.com/s/files/1/0687/7043/products/DSC00442_23bff132-1838-4d78-998a-f866436279f7_2000x1338.jpg?v=1658014721'
          name='ESP ORIGINAL M-II CTM TANZANITE E4380212'
          price='4,577.99'
          path='/product'
          titleStyle='text-ellipsis whitespace-nowrap overflow-hidden'
        />
        <ProductInfo
          image='https://cdn.shopify.com/s/files/1/0687/7043/products/DSC09391_a4784421-10ec-4ea6-8844-572722f73a40_2000x1334.jpg?v=1653520607'
          name='ESP ORIGINAL M-II CTM TANZANITE + Het set E3861212'
          price='4,577.99'
          path='/'
          titleStyle='text-ellipsis whitespace-nowrap overflow-hidden'
        />
        <ProductInfo
          image='https://cdn.shopify.com/s/files/1/0687/7043/products/DSC09391_a4784421-10ec-4ea6-8844-572722f73a40_2000x1334.jpg?v=1653520607'
          name='ESP ORIGINAL M-II CTM TANZANITE + Het set E3861212'
          price='4,577.99'
          path='/'
          titleStyle='text-ellipsis whitespace-nowrap overflow-hidden'
        />
      </div>
    </div>
  );
}

export default HomeScreen;