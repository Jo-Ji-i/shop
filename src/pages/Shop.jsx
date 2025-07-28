import React from 'react';
import Product from '../components/Products.jsx';
import { Outlet } from 'react-router-dom';
import AxiosProduct from '../Api/AxiosProduct.jsx';

export const ShopHeader = () => {
    return (
        <div className="flex items-center justify-start w-full h-12 pt-10 mt-4 text-base bg-white px-7">
            <div className="flex text-xl font-bold text-red-600 font-pre">
                <a href="/">SSI</a>
            </div>
            <div className="flex gap-2 px-4 text-sm text-red-600">
                <div> Category </div>
                <div> Cart</div>
            </div>
        </div>
    );
};

const Shop = ({ products }) => {
    return (
        <>
            <ShopHeader />
            <Outlet></Outlet>
            <div className="flex flex-col w-full h-auto px-4 mx-auto">
                <div className="h-80 justify-center bg-[url('/img/semigold.svg')] bg-center bg-contain bg-no-repeat mb-12"></div>
                <Product products={products} />
                <div className="pb-6"></div>
            </div>
            <AxiosProduct />
        </>
    );
};

export default Shop;
