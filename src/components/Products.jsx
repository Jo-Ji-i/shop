import React, { useState } from 'react';
import products from '../data/product';

const Card = (image, title, content) => {
    return (
        <div>
            <div
                className="m-3 bg-center bg-cover w-60 h-80"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            />
            <h4 className="m-3 text-lg font-medium">{title}</h4>
            <p className="m-3">{content}</p>
        </div>
    );
};

const Products = () => {
    let [allProducts] = useState(products);

    return (
        <div className="w-full">
            <div className="grid grid-cols-3 gap-3 justify-items-center">
                {allProducts.map((item) => {
                    return (
                        <div key={item.id}>
                            <div
                                className="m-3 bg-center bg-cover w-60 h-80"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                }}
                            />
                            <h4 className="m-3 text-lg font-medium">
                                {item.title}
                            </h4>
                            <p className="m-3">{item.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
