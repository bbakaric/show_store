import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
}

type InitialState = {
  items: Product[],
}

const initialState: InitialState = {
  items: []
}

export const addToCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = addToCartSlice.actions

export default addToCartSlice.reducer