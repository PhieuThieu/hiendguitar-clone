import {createSlice} from "@reduxjs/toolkit";

const initialState = {carts:[]}

export const cartSlice =  createSlice({
  name:'cart',
  initialState: initialState,
  reducers: {
    addItem:(state, action) => {
      state.carts.push(action.payload)
    }
  }
})

export const {addItem} = cartSlice.actions

export const selectCart = state => state.carts

export default cartSlice