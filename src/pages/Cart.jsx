import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { increase, decrease } from '../stores/store.js';
import { useDispatch } from 'react-redux';
import cartData from '../data/cart.js';
import { ShopHeader } from './shop.jsx';

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

const CartProduct = () => {
    let state = useSelector((state) => state);
    return (
        <>
            {state.cart.map((item, index) => (
                <div
                    key={item.id}
                    className="grid grid-flow-col w-full grid-cols-[0.5fr_4fr_1.5fr_1.5fr_1.5fr] font-pre text-center border-b-2 justify-center items-center py-5"
                >
                    <div>
                        <input type="checkbox" className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-12 px-10">
                        <div
                            style={{
                                backgroundImage: `url(${item.image})`,
                            }}
                            alt="Product"
                            className="flex items-center w-20 h-20 bg-center bg-no-repeat bg-cover justify-self-center"
                        ></div>
                        <div className="flex flex-col items-start gap-1.5">
                            <h4 className="text-sm font-semibold underline underline-offset-2">
                                SSI
                            </h4>
                            <h4 className="text-base font-bold">{item.name}</h4>
                            <h4 className="text-sm ">
                                {item.price.toLocaleString()}원
                            </h4>
                            <h4 className="text-sm text-red-400">
                                {item.sale}% :{' '}
                                {(
                                    item.price -
                                    item.price * (item.sale / 100)
                                ).toLocaleString()}
                                원
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
                            {(
                                (item.price - item.price * (item.sale / 100)) *
                                item.count
                            ).toLocaleString()}
                            원
                        </div>
                        <div className="flex items-center justify-center w-24 h-8 text-sm text-white bg-black rounded-sm font-pre">
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
            ))}
        </>
    );
};

const TotalProduct = () => {
    let cart = useSelector((state) => state.cart);
    const total = cart.reduce((acc, item) => {
        const salePrice = item.price - item.price * (item.sale / 100);
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
                <CartProduct />

                <div className="flex self-start gap-3 p-5 text-sm font-semibold">
                    <div className="p-4 border"> 선택상품 삭제 </div>
                    <div className="p-4 border"> 전체상품 삭제 </div>
                </div>

                {/* 결제 정보 */}
                <TotalProduct />
            </div>
        </div>
    );
};

export default Cart;
