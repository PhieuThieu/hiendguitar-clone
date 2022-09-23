import React, {useEffect} from 'react';
import SliderImage from "./SliderImage/SliderImage";
import CategoryBar from "./CategoryBar/CategoryBar";
import ProductInfo from "./ProductInfo/ProductInfo";
import {Link} from "react-router-dom";
import LogoHeader from "../../Header/LogoHeader";
import {nanoid} from "nanoid";
import Header from "../../Header/Header";
import Breadcrumb from "../../Component/Breadcrumb/Breadcrumb";
import TypeCategory from "../../Component/TypeCategory/TypeCategory";
import {useDispatch, useSelector} from "react-redux";
import {selectBtn, selectCategory} from "../../reduxSlice/categorySlice";
import {searchProduct} from "../../reduxSlice/productSlice";
import { selectQuantityGuitar} from "../../reduxSlice/reselect";

function HomeScreen({data, user}) {
  const category = useSelector(selectCategory)
  const breadcrumb = useSelector(selectBtn)
  const dispatch = useDispatch()
  const itemQuantity = useSelector(selectQuantityGuitar)

  useEffect(() => {
    dispatch(searchProduct({values:''}))
  }, [dispatch]);
  

  return (
    <div className='mx-5 mb-16 max-w-screen-lg lg:mx-auto '>
      <LogoHeader helloText={!user ? 'Welcome to' : `Hi ${user.displayName}`} />
      <Header user={user}/>
      <div className="lg:pt-32">
        <SliderImage/>
        <CategoryBar/>
        <div className="flex justify-between mb-4 lg:hidden">
          <h2 className='font-bold text-xl'>New Arrival</h2>
          <Link to='/search'>
            <p className='font-medium'>See All</p>
          </Link>
        </div>
        <span className='lg:block hidden'><Breadcrumb type={breadcrumb.name} /></span>
        <div className='grid gap-x-7 gap-y-5 lg:grid-cols-4 '>
          <TypeCategory category={category} itemQuantity={itemQuantity}/>
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5">
            {data && data.map(data => (
              <span key={nanoid()} className='lg:hover:shadow-box cursor-pointer'>
                <ProductInfo
                  type={breadcrumb.name}
                  info={data}
                  image={data.image}
                  name={data.name}
                  price={data.price}
                  titleStyle='line-clamp-1 overflow-hidden lg:line-clamp-3 lg:my-1'
                />
              </span>))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
