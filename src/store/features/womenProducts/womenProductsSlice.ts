import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type Product = {
  id: number,
  title: string
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
    builder.addCase(fetchWomenClothing.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.loading = false
      state.womenClothes = action.payload
      state.error = ''
    })
    builder.addCase(fetchWomenClothing.rejected, (state, action) => {
      state.loading = false
      state.womenClothes = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default womenProductSlice.reducer
