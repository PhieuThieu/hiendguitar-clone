import {createSlice} from "@reduxjs/toolkit";

const initialState = {product: [], productInfo: {}, productQuantity: 1}

const productSlice = createSlice({
  name: 'product', initialState: initialState, reducers: {
    getProduct: (state, action) => {
      state.product.push(action.payload)
    },
    setInfo: (state, action) => {
      state.productInfo = action.payload
    },
    clearInfo: (state) => {
      state.productQuantity = 1
      state.productInfo = {}
    },
    counterIncrement: (state) => {
      state.productQuantity = state.productQuantity + 1
    },
    counterDecrement: (state) => {
      state.productQuantity = state.productQuantity - 1
    },
  },
})

export const selectProduct = (state) => state.product.product

export const selectProductInfo = (state) => state.product.productInfo

export const selectQuantity = (state) => state.product.productQuantity

export const {getProduct, setInfo, clearInfo, counterIncrement, counterDecrement} = productSlice.actions

export default productSlice;