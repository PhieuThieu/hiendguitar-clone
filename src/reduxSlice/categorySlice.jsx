import {createSlice} from "@reduxjs/toolkit";

const initialState = {categoryBtn: ["All", "Electric", "Acoustic","Bass","Other"], clicked:{name: 'All' , active: 'btn-active'}}

const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    clicked: (state, action) => {
      state.clicked = action.payload
    }
  }
})
export const {clicked} = categorySlice.actions

export const selectCategory = (state) => state.category.categoryBtn

export const selectBtn = (state) => state.category.clicked


export default  categorySlice