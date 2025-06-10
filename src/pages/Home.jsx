import React from 'react';

const Home = () => {
    return (
        <div className="w-full h-screen bg-[url('/img/mainbg.jpg')] bg-cover bg-center flex py-4 flex-col">
            <div className="flex flex-row justify-around w-full">
                <h2 className="font-extrabold text-red-600 text-9xl font-pre ">
                    THIS
                </h2>
                <h2 className="font-extrabold text-red-600 text-9xl font-pre ">
                    IS
                </h2>
                <h2 className="font-extrabold text-red-600 text-9xl font-pre ">
                    IT.
                </h2>
            </div>
            <div className="flex flex-row justify-center w-full gap-3 p-4 mt-4">
                <h2 className="text-2xl font-medium text-white font-pre">
                    <a href="/shop">SHOP</a>
                </h2>
                <h2 className="text-2xl font-medium text-white font-pre">
                    ABOUT
                </h2>
            </div>
            <div className="fixed bottom-0 right-0 flex items-center w-full h-12 px-4 py-2 bg-white">
                <div className="text-xl font-bold text-center text-red-600 font-pre"></div>
            </div>
        </div>
    );
};

export default Home;
