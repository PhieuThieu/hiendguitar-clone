import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  user: null,
  address: [
    {type: 'Home', address: '285 Cách Mạng Tháng 8, 12, Quận 10'},
    {type: 'Office', address: '29 Đường Lê Duẩn, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh'}
  ],
  paymentMethod: [
    {name: "Momo", url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1bHjHnPSDXgBS2WSVOAm57BdPvoAmwBMcqXwjTGUiiJGYrkvUZuVgZHXeZJWWX7kLlCg&usqp=CAU'},
    {name: "Visa", url: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1488032888/p7vdrckw0wuktcfiwdnh.png'},
    {name: "Master Card", url: 'https://mobeyforum.org/wp-content/uploads/2017/09/mastercard-200x200.jpg'},
    {name: "Cash on Delivery", url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpLnqEiu6qekBVP5NJGKk3EQxB61vt_UNdDGly4UPHjUZYUJoL87WXarDtqsMjjTHjGM&usqp=CAU'},
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