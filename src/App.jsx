import './App.css';
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/Shop';
import Detail from './pages/detail';
import About from './pages/About';
import Event from './components/Event';
import Cart from './pages/Cart';
import productData from './data/product';
import { useState } from 'react';

export let StockContext = React.createContext();

function App() {
    let [products] = useState(productData);
    let [stock, setStock] = useState([10, 11, 12]);

    return (
        <div>
            <StockContext.Provider value={{ stock, products }}>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/shop" element={<Shop products={products} />}>
                        <Route path="event" element={<Event />}>
                            <Route
                                path="sale"
                                element={
                                    <div className="px-2 text-xl font-bold ">
                                        All Sale
                                    </div>
                                }
                            />
                            <Route
                                path="new"
                                element={
                                    <div className="px-5 text-xl font-bold">
                                        New Product
                                    </div>
                                }
                            />
                        </Route>
                    </Route>

                    <Route
                        path="/detail/:id"
                        element={<Detail products={products} />}
                    />

                    <Route path="/cart" element={<Cart />} />

                    <Route path="/about" element={<About />}>
                        <Route path="member" element={<div> 멤버 소개 </div>} />
                        <Route
                            path="location"
                            element={<div> 위치 정보 </div>}
                        />
                    </Route>

                    <Route path="*" element={<div> 없는 페이지 </div>} />
                </Routes>
            </StockContext.Provider>
        </div>
    );
}

export default App;
