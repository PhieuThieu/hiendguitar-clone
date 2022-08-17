import React from 'react';
import Title from "../../Component/TitleContainer/Title/Title";
import CountQuantityButton from "../../Component/CountQuantityButton/CountQuantityButton";
import SubmitButton from "../../Component/SubmitButton/SubmitButton";
import {useDispatch, useSelector} from "react-redux";
import {productPrice, productQuantity} from "../../reduxSlice/reselect";
import {addItem} from "../../reduxSlice/cartSlice";
import {selectProductInfo} from "../../reduxSlice/productSlice";

function ProductFooter() {
  const quantity = useSelector(productQuantity)
  const price = useSelector(productPrice)
  const info = useSelector(selectProductInfo)
  const dispatch = useDispatch()
  const format = new Intl.NumberFormat('us-Us', {style: 'currency', currency: 'USD'}).format.bind(this)
  console.log(info)

  const handleClick = () => {
    dispatch(addItem({
      description: info.description,
      image: info.image,
      name: info.name,
      price: price,
      specification: info.specification,
      quantity: quantity,
    }))
  }

  return (
    <div className='p-5 fixed bg-primary bottom-0 w-full shadow-top'>
      <div className="flex justify-between">
        <CountQuantityButton quantity={quantity} className='w-20 gap-x-2'/>
        <Title element={format(price)}/>
      </div>
      <SubmitButton onClick={handleClick} name='Add to Cart'/>
    </div>
  );
}

export default ProductFooter;