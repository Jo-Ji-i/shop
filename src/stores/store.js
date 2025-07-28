import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
    name: 'user',
    initialState: 'kim',
});

let cart = createSlice({
    name: 'cart',
    initialState: [
        {
            id: 1,
            name: 'keyring',
            price: 10000,
            sale: 3,
            option: 'Size M',
            count: 2,
            image: './img/keyring.png',
            tfee: 3000,
        },
        {
            id: 2,
            name: 'bracelet',
            price: 20000,
            sale: 8,
            option: 'Color Red',
            count: 1,
            image: './img/ju.png',
            tfee: '무료',
        },
    ],

    reducers: {
        increase(state, action) {
            let idx = state.findIndex((a) => a.id === action.payload);
            state[idx].count++;
        },
        decrease(state, action) {
            let idx = state.findIndex((a) => a.id === action.payload);
            if (state[idx].count > 1) {
                state[idx].count--;
            }
        },
    },
});

export const { increase, decrease } = cart.actions;
export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer,
    },
});
