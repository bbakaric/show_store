import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
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

export const fetchLimitedProducts = createAsyncThunk('slider/fetchLimitedProducts', () => {
  return axios
    .get('https://fakestoreapi.com/products?limit=8')
    .then(response => response.data)
})

const sliderSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLimitedProducts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchLimitedProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.loading = false
      state.products = action.payload
      state.error = ''
    })
    builder.addCase(fetchLimitedProducts.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default sliderSlice.reducer
