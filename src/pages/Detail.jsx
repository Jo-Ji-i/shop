import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/product';
import styled from 'styled-components';
import { ShopHeader } from './Shop';
import Tap from '../components/Tap';
import '../utils/animation.css';
import { StockContext } from '../App';

const Detail = ({ products }) => {
    let { stock } = useContext(StockContext);
    let { id } = useParams();
    let [count, setCount] = useState(1);
    let [fade, setFade] = useState('start');

    let item = products.find((item) => item.productId === parseInt(id));
    if (!item) {
        return <div>상품을 찾을 수 없습니다요.</div>;
    }

    useEffect(() => {
        let fadeTimer = setTimeout(() => {
            setFade('end');
        }, 2000);

        let hideTimer = setTimeout(() => {
            setFade('hide');
        }, 3000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const ItemMain = () => {
        return (
            <div className="flex flex-row px-4 bg-white">
                <div
                    style={{
                        backgroundImage: `url(${item.image})`,
                    }}
                    alt="Product"
                    className="w-1/2 pt-2 m-10 bg-center bg-no-repeat bg-contain h-96"
                />
                <div className="flex flex-col w-1/2 p-4 mt-3">
                    <div className="w-full h-8 border-t-2 border-black" />
                    <h4 className="text-2xl font-bold">{item.title}</h4>
                    <p className="mt-10 ml-2 text-lg"> {item.content} </p>
                    <p className="self-end mt-16 text-lg font-bold">
                        {item.price.toLocaleString()}원
                    </p>
                    <div>{stock}</div>
                    <AmountBox />
                    <PayBox />
                </div>
            </div>
        );
    };

    const EventBanner = () => {
        return (
            <>
                <div
                    className={`${fade} flex items-center mt-4 justify-center w-full h-8 py-2 text-base font-bold text-white bg-red-500`}
                >
                    <span>3초 이내 구매시 할인</span>{' '}
                </div>
            </>
        );
    };

    const AmountBox = () => {
        return (
            <Box className="h-16 mt-10">
                <MinusBtn
                    onClick={() => {
                        if (count > 1) {
                            setCount(count - 1);
                        }
                    }}
                >
                    <span>-</span>
                </MinusBtn>
                <TitleBox>{count}</TitleBox>
                <PlusBtn
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    <span>+</span>
                </PlusBtn>
            </Box>
        );
    };

    const PayBox = () => {
        return (
            <div className="flex items-center justify-around w-full gap-0 mt-6">
                <button className="w-full px-4 py-4 text-sm font-bold text-black bg-white border rounded">
                    장바구니 담기
                </button>
                <button className="w-full px-4 py-4 ml-2 text-sm font-bold text-white bg-black border rounded">
                    바로 구매
                </button>
            </div>
        );
    };

    return (
        <div className="container flex flex-col px-4 mx-auto">
            <ShopHeader />
            <EventBanner />
            <ItemMain />
            <Tap />
        </div>
    );
};

const Input = () => {
    let [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    useEffect(() => {
        if (inputValue && isNaN(inputValue)) {
            alert('숫자만 입력 가능합니다.');
            setInputValue('');
        }
    }, [inputValue]);

    return (
        <input
            type="text"
            className="w-full px-4 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="숫자만 입력하세요"
            value={inputValue}
            onChange={handleChange}
        />
    );
};

let Box = styled.div`
    width: 40%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

let MinusBtn = styled.button`
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
`;

let TitleBox = styled.div`
    flex: 1;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #ccc;
    align-items: center;
    text-align: center;
`;

let PlusBtn = styled.button`
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
`;

export default Detail;
