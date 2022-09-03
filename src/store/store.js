import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../reduxSlice/userSlice'
import productSlice from "../reduxSlice/productSlice";
import categorySlice from "../reduxSlice/categorySlice";
import cartSlice from "../reduxSlice/cartSlice";
import footer from '../reduxSlice/footerSlice'

const reducer = {
  user: userReducer.reducer,
  product: productSlice.reducer,
  category: categorySlice.reducer,
  cart: cartSlice.reducer,
  footer: footer.reducer
}

export default configureStore({reducer})