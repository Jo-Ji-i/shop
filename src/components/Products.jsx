import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 상품 보여주는 카드 컴포넌트
// 각 상품의 이미지, 제목, 내용, 가격을 보여줌
// 클릭 시 해당 상품의 상세 페이지로 이동
// 상품 데이터는 props로 전달받음
const Card = ({ image, title, content, price, productId }) => {
    return (
        <div onClick={() => console.log('Card clicked! >>', productId)}>
            <Link
                to={`/detail/${productId}`}
                className="flex flex-col items-center"
            >
                <div
                    className="m-3 bg-center bg-cover w-60 h-80"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                />
                <h4 className="m-3 text-lg font-medium">{title}</h4>
                <p className="m-3">{content}</p>
                <p className="m-3 font-medium">
                    {parseFloat(price).toLocaleString()}원
                </p>
            </Link>
        </div>
    );
};

// 상품 목록 컴포넌트
// props로 전달받은 상품 데이터를 기반으로 카드 컴포넌트를 렌더
const Products = ({ products }) => {
    if (!Array.isArray(products)) {
        return <div>상품 데이터가 없습니다.</div>;
    }

    return (
        <div className="w-full">
            <div className="grid grid-cols-3 gap-3 mb-14 justify-items-center">
                {products.map((item) => {
                    return (
                        <div
                            key={item.productId}
                            className="flex flex-col items-center col-span-1"
                        >
                            {
                                <Card
                                    productId={item.productId}
                                    image={item.image}
                                    title={item.title}
                                    content={item.content}
                                    price={item.price}
                                />
                            }
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
