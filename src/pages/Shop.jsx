import React from 'react';
import Product from '../components/Products.jsx';

const Shop = () => {
    return (
        <>
            <div className="flex items-center justify-start w-full h-12 text-base bg-white px-7">
                <div className="flex text-xl font-bold text-red-600 font-pre">
                    <a href="/">SSI</a>
                </div>
                <div className="flex gap-2 px-4 text-sm text-red-600">
                    <div> Category </div>
                    <div> Cart</div>
                </div>
            </div>
            <div className="flex flex-col w-full h-auto">
                <div className="h-80 justify-center bg-[url('/img/semigold.svg')] bg-center bg-contain bg-no-repeat mb-12"></div>
                <Product />
                <div className="pb-6"></div>
            </div>
        </>
    );
};

export default Shop;
