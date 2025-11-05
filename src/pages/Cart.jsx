import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { increase, decrease } from '../stores/cartSlice.js';
import { useDispatch } from 'react-redux';
import { changeName, changeAge } from '../stores/userSlice.js';
import { ShopHeader } from './Shop.jsx';
import products from '../data/product';

const CartHeader = () => {
    return (
        <div className="grid grid-flow-col w-full grid-cols-[0.5fr_4fr_1.5fr_1.5fr_1.5fr] text-base font-bold text-center pb-5 border-b-2">
            <div className="items-center">
                <input type="checkbox" />
            </div>
            <div> 상품정보</div>
            <div> 수량</div>
            <div> 주문금액</div>
            <div> 배송비</div>
        </div>
    );
};

const AmountBtn = ({ amount, id }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="flex items-center justify-center p-5 text-sm font-semibold">
                <button
                    onClick={() => dispatch(decrease(id))}
                    className="px-3 py-2 border"
                >
                    {' '}
                    -
                </button>
                <div className="px-3 py-2 border"> {amount}</div>
                <button
                    onClick={() => dispatch(increase(id))}
                    className="px-3 py-2 border"
                >
                    {' '}
                    +{' '}
                </button>
            </div>
        </>
    );
};

const CartProduct = ({ products }) => {
    let state = useSelector((state) => state);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    if (!cart || cart.length === 0) {
        return <div>장바구니가 비어 있습니다.</div>;
    }

    return (
        <>
            {cart.map((item, index) => {
                const product = products.find(
                    (product) => product.productId === item.productId
                );

                if (!product) {
                    return (
                        <div key={index} className="text-red-500">
                            상품 정보가 없습니다.
                        </div>
                    );
                }

                const discountedPrice =
                    product.price - product.price * (product.sale / 100);

                return (
                    <div
                        key={item.cartId}
                        className="grid grid-flow-col w-full grid-cols-[0.5fr_4fr_1.5fr_1.5fr_1.5fr] font-pre text-center border-b-2 justify-center items-center py-5"
                    >
                        <div>
                            <input type="checkbox" className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-12 px-10">
                            <div
                                style={{
                                    backgroundImage: `url(${product.image})`,
                                }}
                                alt="Product"
                                className="flex items-center w-20 h-20 bg-center bg-no-repeat bg-cover justify-self-center"
                            ></div>
                            <div className="flex flex-col items-start gap-1.5">
                                <h4 className="text-sm font-semibold underline underline-offset-2">
                                    SSI
                                </h4>
                                <h4 className="text-base font-bold">
                                    {product.name}
                                </h4>
                                <h4 className="text-sm ">
                                    {product.price.toLocaleString()}원
                                </h4>
                                <h4 className="text-sm text-red-400">
                                    {product.sale}% :{' '}
                                    {discountedPrice.toLocaleString()}원
                                </h4>
                                <h4 className="text-xs">
                                    {' '}
                                    [옵션] : {item.option}{' '}
                                </h4>
                            </div>
                        </div>
                        <AmountBtn amount={item.count} id={item.id} />

                        <div className="flex flex-col items-center gap-3 p-3">
                            <div className="text-base font-semibold">
                                {discountedPrice.toLocaleString()}원
                            </div>
                            <div
                                onClick={() => dispatch(changeAge())}
                                className="flex items-center justify-center w-24 h-8 text-sm text-white bg-black rounded-sm font-pre"
                            >
                                바로 구매하기
                            </div>
                        </div>
                        {!isNaN(item.tfee) ? (
                            <p className="text-sm font-semibold">
                                {parseFloat(item.tfee).toLocaleString()}원
                            </p>
                        ) : (
                            <p className="text-sm font-semibold">{item.tfee}</p>
                        )}
                    </div>
                );
            })}
        </>
    );
};

const TotalProduct = ({ products }) => {
    const cart = useSelector((state) => state.cart || []); // 기본값 설정

    // cart가 없거나 비어있으면 0으로 초기화
    if (!cart.length) {
        return;
    }

    const total = cart.reduce((acc, item) => {
        const product = products.find((p) => p.productId === item.productId);
        if (!product) return acc;
        const salePrice = product.price - product.price * (product.sale / 100);
        return acc + salePrice * item.count;
    }, 0);

    const price = cart.reduce((acc, item) => {
        const fee = Number(item.tfee);
        return !isNaN(fee) ? acc + fee : acc;
    }, 0);

    return (
        <div className="w-full pt-8 pb-8">
            {/* 헤더 줄 */}
            <div className="grid w-full grid-cols-3 p-5 text-base font-bold text-center border-t-4 border-b-2 border-t-black">
                <div className="text-center">총 주문금액</div>
                <div className="text-center">총 배송비</div>
                <div className="text-center">총 결제금액</div>
            </div>

            {/* 금액 줄 */}
            <div className="grid w-full grid-cols-3 p-5 text-base text-center border-b-2 ">
                <div className="text-center">{total.toLocaleString()}원</div>
                <div className="text-center">{price.toLocaleString()}원</div>
                <div className="text-center">
                    {(total + price).toLocaleString()}원
                </div>
            </div>
        </div>
    );
};

const Cart = () => {
    let a = useSelector((state) => state.user);

    console.log(a);

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-10 pt-20 font-pre">
            <ShopHeader />
            <div className="py-3">
                <h3 className="text-sm font-semibold"> SHOPPING BAG </h3>
            </div>
            <div className="flex flex-col items-center justify-center w-4/5 p-5 border-t-4 border-black">
                <CartHeader />

                {/* 상품 리스트  */}
                <CartProduct products={products} />

                <div className="flex self-start gap-3 p-5 text-sm font-semibold">
                    <div className="p-4 border"> 선택상품 삭제 </div>
                    <div className="p-4 border"> 전체상품 삭제 </div>
                </div>

                {/* 결제 정보 */}
                <TotalProduct products={products} />
            </div>
        </div>
    );
};

export default Cart;
