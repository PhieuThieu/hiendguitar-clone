import {createDraftSafeSelector} from "@reduxjs/toolkit";
import {counterIncrement, selectProduct, selectProductInfo, selectQuantity} from './productSlice'
import {selectBtn} from "./categorySlice";
import {useDispatch} from "react-redux";

export const bassGuitar = createDraftSafeSelector(selectProduct, (product) => {
  if (product.length !== 0) {
    return product[0].bass
  }
})

export const electricGuitar = createDraftSafeSelector(selectProduct, (product) => {
  if (product.length !== 0) {
    return product[0].electric
  }
})

export const selectGuitar = createDraftSafeSelector([bassGuitar, electricGuitar, selectBtn], (bass, electric, btn) => {
  if (bass && electric) {
    switch (btn.name) {
      case 'Electric':
        return electric
      case 'Bass':
        return bass
      // case 'acoustic': return acoustic
      default:
        return electric.concat(bass)
    }
  } else return []
})

export const productQuantity = createDraftSafeSelector(selectQuantity, (quantity) => {
  const dispatch = useDispatch()

  if (quantity < 1) {
    dispatch(counterIncrement())
  }
  return quantity
})

export  const  productPrice = createDraftSafeSelector([productQuantity, selectProductInfo], (quantity, product) => {
  return quantity * product.price
})