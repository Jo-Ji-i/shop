import { configureStore, createSlice } from '@reduxjs/toolkit';

let cart = createSlice({
    name: 'cart',
    initialState: [
        {
            cartId: 1, // 카트 아이디 (고유한 ID)
            productId: 1, // 실제 상품의 아이디
            count: 2, // 수량
            option: 'Size M', // 옵션
            tfee: 3000, // 배송비
        },
        {
            cartId: 2, // 카트 아이디
            productId: 2, // 실제 상품의 아이디
            count: 1, // 수량
            option: 'Color Red',
            tfee: '무료', // 무료배송
        },
    ],

    reducers: {
        increase(state, action) {
            let idx = state.findIndex((a) => a.cartId === action.payload);
            if (idx !== -1) {
                state[idx].count++;
            }
        },
        decrease(state, action) {
            let idx = state.findIndex((a) => a.cartId === action.payload);
            if (idx !== -1 && state[idx].count > 1) {
                state[idx].count--;
            }
        },

        addToCart(state, action) {
            const { productId, count, option, tfee } = action.payload;

            // 이미 장바구니에 있는 상품인지 확인
            const existingItem = state.find(
                (item) => item.productId === productId
            );

            if (existingItem) {
                // 이미 장바구니에 있으면 수량만 증가
                existingItem.count += count;
            } else {
                // 새로운 상품 추가
                state.push({
                    cartId: Date.now().getTime(), // 고유한 카트 아이디 생성
                    productId: productId,
                    count: count,
                    option: option || '기본 옵션', // 기본 옵션 처리
                    tfee: tfee || 0, // 배송비 기본값 설정
                });
            }
        },
    },
});

export const { increase, decrease, addToCart } = cart.actions;

export default cart.reducer;
