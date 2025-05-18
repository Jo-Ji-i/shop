import './App.css';

function App() {
    return (
        <>
            <div className="flex bg-gray-100 w-full justify-start items-center h-12 text-base px-7">
                <div> ShoeShop </div>
                <div className="flex text-gray-500 text-sm gap-2 px-4">
                    <div> Home </div>
                    <div> Cart</div>
                </div>
            </div>
            <div className="flex flex-col w-full h-auto">
                <div className="h-80 bg-cover justify-center bg-[url(./bg.png)] mb-8"></div>
                <div className="grid grid-cols-3 gap-3 justify-items-center">
                    <div className="flex flex-col w-full justify-center items-center m-2">
                        <div className="w-60 h-60 bg-[url('/img/product1.png')] bg-cover bg-center mb-3" />
                        <h4> 상품명</h4>
                        <p> 상품정보</p>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center m-2">
                        <div className="w-60 h-60 bg-[url('/img/product2.png')] bg-cover bg-center mb-3" />
                        <h4> 상품명</h4>
                        <p> 상품정보</p>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center m-2">
                        <img
                            src={process.env.PUBLIC_URL + '/product3.png'}
                            className="w-60 h-60 bg-cover bg-center mb-3"
                        />
                        <h4> 상품명</h4>
                        <p> 상품정보</p>
                    </div>
                    <div> d</div>
                    <div> d</div>
                </div>
            </div>
        </>
    );
}

export default App;
