import {createDraftSafeSelector} from "@reduxjs/toolkit";
import {
  counterIncrement, selectProducts, selectProductInfo, selectQuantity, selectSearchRequest
} from './productSlice'
import {selectBtn} from "./categorySlice";
import {useDispatch} from "react-redux";
import {selectCart} from "./cartSlice";

export const selectGuitar = createDraftSafeSelector([selectProducts, selectBtn], (data, btn) => {
  if (data) {
    return btn.name === 'All' ? data : data.filter(product => {
      if (product.branch === btn.name) {
        return product
      }
    })
  }
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

export const searchProduct = createDraftSafeSelector([selectProducts, selectSearchRequest], (all, request) => {
  if (all) {
    if (request.values === '') {
      return all
    } else {
      return all.filter(product => product.name.toLowerCase().includes(request.values.toLowerCase()))
    }
  }
})

export const selectQuantityGuitar = createDraftSafeSelector([selectProducts], (data) => {
  let bass = 0
  let acoustic = 0
  let electric = 0
  data && data.forEach(product => {
    if (product.branch === 'Bass') {
      bass++
    }
    if (product.branch === 'Acoustic') {
      acoustic++
    }
    if (product.branch === 'Electric') {
      electric++
    }
  })
  return [acoustic + bass + electric, acoustic, bass, electric]

})
