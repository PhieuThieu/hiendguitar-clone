import React, {useState} from 'react';
import Title from "../../Component/TitleContainer/Title/Title";
import CountQuantityButton from "../../Component/CountQuantityButton/CountQuantityButton";
import SubmitButton from "../../Component/SubmitButton/SubmitButton";
import {useDispatch, useSelector} from "react-redux";
import {productPrice, productQuantity} from "../../reduxSlice/reselect";
import {addItem, changeQuantity, selectCart} from "../../reduxSlice/cartSlice";
import {counterDecrement, counterIncrement, selectProductInfo} from "../../reduxSlice/productSlice";
import {useNavigate} from "react-router-dom";
import SuccessSubmit from "./SuccessSubmit";

function ProductFooter() {
  const navigate = useNavigate()
  const quantity = useSelector(productQuantity)
  const price = useSelector(productPrice)
  const info = useSelector(selectProductInfo)
  const carts = useSelector(selectCart)
  const dispatch = useDispatch()
  const format = new Intl.NumberFormat('us-Us', {style: 'currency', currency: 'USD'}).format.bind(this)
  const [active, setActive] = useState(true);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = () => {
    const checkCartExists = carts.find(cart => cart.name === info.name)
    checkCartExists ? dispatch(changeQuantity({
      name: info.name, quantity: quantity, price: price,
    })) : dispatch(addItem({
      description: info.description,
      image: info.image,
      name: info.name,
      price: price,
      specification: info.specification,
      quantity: quantity,
      active: true,
    }))
    setSubmit(true)
    setTimeout(() => navigate('/'),300)
  }
  const handleDecrement = () => {
    dispatch(counterDecrement())
    setActive(false)
  }
  const handleIncrement = () => {
    dispatch(counterIncrement())
    setActive(true)
  }


  return (
    <div className='p-5 fixed bg-primary bottom-0 w-full z-20 shadow-top'>
      <SuccessSubmit content='Added to cart successfully!' active={submit}/>
      <div className="flex justify-between">
        <CountQuantityButton quantity={quantity}
                             decrement={handleDecrement}
                             increment={handleIncrement}
                             className='w-20 gap-x-2'
                             active={active}
        />
        <Title element={format(price)}/>
      </div>
      <SubmitButton onClick={handleSubmit} name='Add to Cart'/>
    </div>);
}

export default ProductFooter;