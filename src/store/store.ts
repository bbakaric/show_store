import { configureStore } from "@reduxjs/toolkit";
import allProductsReducer from './features/allProducts/allProductsSlice';
import electronicsReducer from './features/electronics/electronicsSlice';
import jeweleryReducer from './features/jewelery/jewelerySlice';
import mensClothesReducer from './features/menProducts/menProductsSlice';
import womensClothesReducer from './features/womenProducts/womenProductsSlice';
import counterReducer from './features/addToCart/addToCartSlice';


export const store = configureStore({
    reducer: {
        product: allProductsReducer,
        electronics: electronicsReducer,
        jewelery: jeweleryReducer,
        mensClothes: mensClothesReducer,
        womensClothes: womensClothesReducer,
        addToCart: counterReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch