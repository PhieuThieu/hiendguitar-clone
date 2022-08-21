import React from 'react';
import SliderImage from "./SliderImage/SliderImage";
import CategoryBar from "./CategoryBar/CategoryBar";
import ProductInfo from "./ProductInfo/ProductInfo";
import {Link} from "react-router-dom";
import LogoHeader from "../../Component/Heading/LogoHeader";

function HomeScreen({data, user}) {

  return (
    <div className='mx-5 mb-16'>
      <LogoHeader helloText={!user ? 'Welcome to' : `Hi ${user.displayName}`} />
      <SliderImage/>
      <CategoryBar/>
      <div className="flex justify-between mb-4">
        <h2 className='font-bold text-xl'>New Arrival</h2>
        <Link to='/search'>
          <p className='font-medium'>See All</p>
        </Link>
      </div>
      <div className='grid grid-cols-2 gap-x-7 gap-y-5 '>
        {data.map(data => (
            <ProductInfo
              info={data}
              image={data.image}
              name={data.name}
              price={data.price}
              titleStyle='text-ellipsis whitespace-nowrap overflow-hidden'
            />
          ))
        }
      </div>
    </div>
  );
}

export default HomeScreen;