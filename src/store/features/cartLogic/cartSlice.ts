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
  totalSum: number,
  checkoutMessage: boolean
}

const initialState: InitialState = {
  items: [],
  quantityIndicator: 0,
  totalSum: 0,
  checkoutMessage: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
      state.quantityIndicator ++;
      state.checkoutMessage = false;
    },
    removeItem: (state, action) => { 
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = []
      state.quantityIndicator = 0
      state.checkoutMessage = true
    },
    quantityIndicatorIncrease: (state) => {
      state.quantityIndicator ++;
    },
    quantityIndicatorDecrease: (state) => {
      state.quantityIndicator --;
    },
    quantitySum: (state, action) => {
      const {id, count} = action.payload;
      state.items.forEach(item => {
        if (item.id == id) {
          item.cartQuantity = count;
        }
      });
    },
    totalSumAdd: (state, action) => {
      state.totalSum = state.totalSum + action.payload;
    },
    totalSumSubtract: (state, action) => {
      state.totalSum = state.totalSum - action.payload;
    },
  }
})

export const { addItem, removeItem, quantityIndicatorIncrease, quantityIndicatorDecrease, quantitySum, totalSumAdd, totalSumSubtract, clearCart } = cartSlice.actions

export default cartSlice.reducer