import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type Product = {
  id: number,
  title: string
}

type InitialState = {
  loading: boolean,
  electronics: Product[],
  error: string
}

const initialState: InitialState = {
  loading: false,
  electronics: [],
  error: ''
}

export const fetchElectronics = createAsyncThunk('electronics/fetchElectronics', () => {
  return axios
    .get('https://fakestoreapi.com/products/category/electronics')
    .then(response => response.data)
})

const electronicsSlice = createSlice({
  name: 'electronic',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchElectronics.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchElectronics.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.loading = false
      state.electronics = action.payload
      state.error = ''
    })
    builder.addCase(fetchElectronics.rejected, (state, action) => {
      state.loading = false
      state.electronics = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default electronicsSlice.reducer
