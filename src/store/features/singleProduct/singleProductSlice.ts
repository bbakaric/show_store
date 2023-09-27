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
  product: Product,
  error: string
}

const initialState: InitialState = {
  loading: false,
  product: {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  },
  error: '',
}

export const fetchProduct = createAsyncThunk('singleProduct/fetchProduct', async (id: string | undefined) => {
  const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
  return response.data
})

const singleProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProduct.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Product>) => {
      state.loading = false
      state.product = action.payload
      state.error = ''
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false
      state.product = {
          id: 0,
          title: '',
          price: 0,
          description: '',
          category: '',
          image: '',
          rating: {
            rate: 0,
            count: 0
          }
        }
      state.error = action.error.message || 'Error'
    })
  }
})

export default singleProductSlice.reducer
