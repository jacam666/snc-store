// src/features/cart/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    size: string;
    flavour: string;
}

interface CartState {
    items: Product[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            state.items.push(action.payload);
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
