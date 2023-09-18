import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type Product = {
  id: number,
  title: string
}

type InitialState = {
  loading: boolean,
  products: Product[],
  error: string
}

const initialState: InitialState = {
  loading: false,
  products: [],
  error: ''
}

export const fetchAllProducts = createAsyncThunk('allProducts/fetchAllProducts', () => {
  return axios
    .get('https://fakestoreapi.com/products')
    .then(response => response.data)
})

const allProductsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllProducts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchAllProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.loading = false
      state.products = action.payload
      state.error = ''
    })
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default allProductsSlice.reducer