import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: null,
  address: [
    {type: 'Home', address: '285 Cách Mạng Tháng 8, 12, Quận 10'},
    {type: 'Office', address: '29 Đường Lê Duẩn, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh'}
  ],
  paymentMethod: [
    {name: "Momo", url: 'https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png'},
    {name: "Visa", url: 'https://st4.depositphotos.com/1050070/21934/i/600/depositphotos_219349068-stock-photo-chisinau-moldova-september-2018-visa.jpg'},
    {name: "Master Card", url: 'https://images.fonearena.com/blog/wp-content/uploads/2015/07/MasterCard_early_1990s_logo.jpg'},
    {name: "Cash on Delivery", url: 'https://cdn1.iconfinder.com/data/icons/e-commerce-291/100/e_-commerce_-_outlined_cod-512.png'},
  ]
}

const userSlice = createSlice({
  name: 'user', initialState: initialState, reducers: {
    login: (state, action) => {
      state.user = action.payload
    }, logout: (state) => {
      state.user = null
    },
  }
})

export const selectUser = (state) => state.user.user
export const selectAddress = (state) => state.user.address
export const selectPayment = (state) => state.user.paymentMethod

export const {login, logout} = userSlice.actions

export default userSlice