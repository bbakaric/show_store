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
  womenClothes: Product[],
  error: string
}

const initialState: InitialState = {
  loading: false,
  womenClothes: [],
  error: ''
}

export const fetchWomenClothing = createAsyncThunk('womenProducts/fetchWomenClothing', () => {
  return axios
    .get(`https://fakestoreapi.com/products/category/women's%20clothing`)
    .then(response => response.data)
})

const womenProductSlice = createSlice({
  name: 'womenClothing',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchWomenClothing.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchWomenClothing.fulfilled, (state: InitialState, action: PayloadAction<Product[]>) => {
      state.loading = false
      state.womenClothes = action.payload
      state.error = ''
    })
    builder.addCase(fetchWomenClothing.rejected, (state: InitialState, action) => {
      state.loading = false
      state.womenClothes = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default womenProductSlice.reducer
