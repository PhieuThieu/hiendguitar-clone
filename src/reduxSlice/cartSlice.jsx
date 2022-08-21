import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  carts: []
}

export const cartSlice = createSlice({
  name: 'cart', initialState: initialState, reducers: {
    addItem: (state, action) => {
      state.carts.push(action.payload)
    },
    changeQuantity: (state, action) => {
      state.carts.forEach(cart => {
        if (cart.name === action.payload.name) {
          cart.quantity = action.payload.quantity
          cart.price = action.payload.price
        }
      })
    },
    increaseItem: (state, action) => {
      const currentPrice = state.carts[action.payload].price
      const unitPrice = currentPrice / state.carts[action.payload].quantity
      state.carts[action.payload].quantity += 1
      state.carts[action.payload].price = unitPrice * state.carts[action.payload].quantity
      state.carts[action.payload].active = true
    },
    decreaseItem: (state, action) => {
      const currentPrice = state.carts[action.payload].price
      const unitPrice = currentPrice / state.carts[action.payload].quantity
      if (state.carts[action.payload].quantity > 1) {
        state.carts[action.payload].quantity -= 1
        state.carts[action.payload].price -= unitPrice
        state.carts[action.payload].active = false
      }
    },
    removeItem: (state, action) => {
      state.carts.splice(action.payload, 1)
    },
  },
})

export const {addItem, changeQuantity, increaseItem, decreaseItem, removeItem,} = cartSlice.actions

export const selectCart = state => state.cart.carts

export default cartSlice