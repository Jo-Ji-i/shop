import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ image, title, content, price, id }) => {
    return (
        <div>
            <Link to={`/detail/${id}`} className="flex flex-col items-center">
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
                            key={item.id}
                            className="flex flex-col items-center col-span-1"
                        >
                            {
                                <Card
                                    id={item.id}
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
