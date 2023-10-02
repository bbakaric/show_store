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
  mensClothes: Product[],
  error: string
}

const initialState: InitialState = {
  loading: false,
  mensClothes: [],
  error: ''
}

export const fetchMensClothes = createAsyncThunk('menProducts/fetchMensClothes', () => {
  return axios
    .get(`https://fakestoreapi.com/products/category/men's clothing`)
    .then(response => response.data)
})

const mensClothesSlice = createSlice({
  name: 'mensClothes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMensClothes.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchMensClothes.fulfilled, (state: InitialState, action: PayloadAction<Product[]>) => {
      state.loading = false
      state.mensClothes = action.payload
      state.error = ''
    })
    builder.addCase(fetchMensClothes.rejected, (state: InitialState, action) => {
      state.loading = false
      state.mensClothes = []
      state.error = action.error.message || 'Error'
    })
  }
})

export default mensClothesSlice.reducer
