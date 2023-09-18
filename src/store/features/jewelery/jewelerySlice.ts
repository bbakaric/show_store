import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type Product = {
  id: number,
  title: string
}

type InitialState = {
  loading: boolean,
  jewelery: Product[],
  error: string
}

const initialState: InitialState = {
  loading: false,
  jewelery: [],
  error: ''
}

export const fetchJewelery = createAsyncThunk('jewelery/fetchJewelery', () => {
  return axios
    .get('https://fakestoreapi.com/products/category/jewelery')
    .then(response => response.data)
})

const jewelerySlice = createSlice({
  name: 'jewel',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchJewelery.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchJewelery.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.loading = false
      state.jewelery = action.payload
      state.error = ''
    })
    builder.addCase(fetchJewelery.rejected, (state, action) => {
      state.loading = false
      state.jewelery = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default jewelerySlice.reducer
