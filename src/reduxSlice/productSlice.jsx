import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {child, get, ref} from "firebase/database";
import {database} from "../FireBase/firebase";

const initialState = {products: null, productInfo: {}, productQuantity: 1, searchRequest: {values: ''}}

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload
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
    searchProduct: (state, action) => {
      state.searchRequest = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
  }
})

export const selectProducts = (state) => state.product.products

export const selectProductInfo = (state) => state.product.productInfo

export const selectQuantity = (state) => state.product.productQuantity

export const selectSearchRequest = (state) => state.product.searchRequest

export const {setProduct, setInfo, clearInfo, counterIncrement, counterDecrement, searchProduct} = productSlice.actions

export const searchProducts = createAsyncThunk('searchProduct', async (value = '') => {
  const response = await get(child(ref(database), `guitar`))
    .then((response) => {
      let data = response.val()
      if (response.exists()) {
        return data
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      return error
    });

  const sort = await function () {
    const result = []
    const all = response
    const inputValue = value.toLowerCase()
    all.forEach(product => {

      if (product.name.toLowerCase().includes(inputValue)) {
        result.push(product)
      }
    })
    return result
  }
  return sort()
})

export default productSlice;
