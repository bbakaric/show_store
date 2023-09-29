import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  cartQuantity: number,
}

type InitialState = {
  items: Product[],
  quantityIndicator: number,
}

const initialState: InitialState = {
  items: [],
  quantityIndicator: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
      state.quantityIndicator ++;
    },
    removeItem: (state, action) => { 
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    quantityIndicatorIncrease: (state) => {
      state.quantityIndicator ++;
    },
    quantityIndicatorDecrease: (state) => {
      state.quantityIndicator --;
    },
  }
})

export const { addItem, removeItem, quantityIndicatorIncrease, quantityIndicatorDecrease } = cartSlice.actions

export default cartSlice.reducer