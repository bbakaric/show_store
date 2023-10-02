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

type QuantityState = {
  quantityIndicator: number
}

type CartState = {
  items: Product[],
  quantityIndicator: number,
  checkoutMessage: boolean,
}

type ItemsState = {
  items: Product[]
}

type TotalSumState = {
  totalSum: number
}

type NumberPayload = {
  type: string,
  payload: number,
}

type ArrayPayload = {
  type: string,
  id: number,
  count: number
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state: InitialState, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
      state.quantityIndicator ++;
      state.checkoutMessage = false;
    },
    removeItem: (state: InitialState, action: NumberPayload) => {
      state.items.forEach(item => {
        if (item.id == action.payload) {
          state.totalSum = state.totalSum - item.sumQuantity;
        }
      });
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state: CartState) => {
      state.items = []
      state.quantityIndicator = 0
      state.checkoutMessage = true
    },
    quantityIndicatorIncrease: (state: QuantityState) => {
      state.quantityIndicator ++;
    },
    quantityIndicatorDecrease: (state: QuantityState) => {
      state.quantityIndicator --;
    },
    quantityCount: (state: ItemsState, action: PayloadAction<ArrayPayload>) => {
      const {id, count} = action.payload;
      state.items.forEach(item => {
        if (item.id == id) {
          item.cartQuantity = count;
        }
      });
    },
    quantitySumAdd: (state: ItemsState, action: NumberPayload) => {
      state.items.forEach(item => {
        if (item.id == action.payload) {
          item.sumQuantity = (item.cartQuantity + 1) * item.price;
        }
      });
    },
    quantitySumSubtract: (state: ItemsState, action: NumberPayload) => {
      state.items.forEach(item => {
        if (item.id == action.payload) {
          item.sumQuantity = item.sumQuantity - item.price;
        }
      });
    },
    totalSumAdd: (state: TotalSumState, action: NumberPayload) => {
      state.totalSum = state.totalSum + action.payload;
    },
    totalSumSubtract: (state: TotalSumState, action: NumberPayload) => {
      state.totalSum = state.totalSum - action.payload;
    },
    clearCartLogout: (state: ItemsState) => {
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