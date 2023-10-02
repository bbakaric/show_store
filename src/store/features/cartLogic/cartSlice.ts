import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  cartQuantity: number,
  sumQuantity: number,
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
      state.items.forEach(item => {
        if (item.id == action.payload) {
          state.totalSum = state.totalSum - item.sumQuantity;
        }
      });
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
    quantityCount: (state, action) => {
      const {id, count} = action.payload;
      state.items.forEach(item => {
        if (item.id == id) {
          item.cartQuantity = count;
        }
      });
    },
    quantitySumAdd: (state, action) => {
      state.items.forEach(item => {
        if (item.id == action.payload) {
          item.sumQuantity = (item.cartQuantity + 1) * item.price;
        }
      });
    },
    quantitySumSubtract: (state, action) => {
      state.items.forEach(item => {
        if (item.id == action.payload) {
          item.sumQuantity = item.sumQuantity - item.price;
        }
      });
    },
    totalSumAdd: (state, action) => {
      state.totalSum = state.totalSum + action.payload;
    },
    totalSumSubtract: (state, action) => {
      state.totalSum = state.totalSum - action.payload;
    },
    clearCartLogout: (state) => {
      state.items = [];
    }
  }
})

export const { 
  addItem, 
  removeItem, 
  quantityIndicatorIncrease, 
  quantityIndicatorDecrease, 
  quantityCount, 
  totalSumAdd, 
  totalSumSubtract, 
  clearCart, 
  clearCartLogout, 
  quantitySumAdd,
  quantitySumSubtract,
} = cartSlice.actions

export default cartSlice.reducer