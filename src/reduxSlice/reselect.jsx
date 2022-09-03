import {createDraftSafeSelector} from "@reduxjs/toolkit";
import {
  counterIncrement, selectProducts, selectProductInfo, selectQuantity, selectSearchRequest
} from './productSlice'
import {selectBtn} from "./categorySlice";
import {useDispatch} from "react-redux";
import {selectCart} from "./cartSlice";

export const bassGuitar = createDraftSafeSelector(selectProducts, (product) => {
  return product.bass
})

export const acousticGuitar = createDraftSafeSelector(selectProducts, (product) => {
  return product.acoustic
})

export const electricGuitar = createDraftSafeSelector(selectProducts, (product) => {
  return product.electric
})

export const allGuitar = createDraftSafeSelector([acousticGuitar, bassGuitar, electricGuitar], (acoustic, bass, electric) => {
  if (bass && electric && acoustic) {
    return [...electric, ...bass, ...acoustic]
  }
})

export const selectGuitar = createDraftSafeSelector([acousticGuitar, bassGuitar, electricGuitar, allGuitar, selectBtn], (acoustic, bass, electric, all, btn) => {
  if (acoustic && bass && electric && all) {
    switch (btn.name) {
      case 'Electric':
        return electric
      case 'Bass':
        return bass
      case 'Acoustic':
        return acoustic
      default:
        return all
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

export const productPrice = createDraftSafeSelector([productQuantity, selectProductInfo], (quantity, product) => {
  return quantity * product.price
})

export const totalCartPrice = createDraftSafeSelector(selectCart, (carts) => {
  const prices = carts.map(cart => cart.price)
  return prices.reduce((result, nextPrice) => result + nextPrice, 0)
})

export const totalQuantity = createDraftSafeSelector(selectCart, (carts) => {
  return carts.length
})

export const searchProduct = createDraftSafeSelector([allGuitar, selectSearchRequest], (all, request) => {
  if (all) {
    if (request.values === '') {
      return all
    } else {
      return all.filter(product => product.name.toLowerCase().includes(request.values.toLowerCase()))
    }
  } else return []
})

export const selectQuantityGuitar = createDraftSafeSelector([selectProducts], (products) => {
  const acoustic = products.acoustic?.length
  const electric = products.electric?.length
  const bass = products.electric?.length
  return [acoustic + bass + electric, bass, acoustic, electric]

})