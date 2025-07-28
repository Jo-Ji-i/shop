import react from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Products from '../components/Products';

const AxiosProduct = () => {
    let [data, setData] = useState([]);
    let [isload, setIsLoad] = useState(true);

    const fetchData = () => {
        axios
            .get('http://localhost:4000/products')
            .then((response) => {
                setData(response.data);
                setIsLoad(false);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };

    useEffect(() => {
        console.log('load Data', data);
    }, [data]);

    return (
        <div className="flex flex-col items-center justify-center w-full mt-4">
            {isload ? (
                <button
                    onClick={fetchData}
                    className="flex items-center justify-center w-24 h-10 p-2 m-4 text-base text-gray-500 border rounded loadBtn"
                >
                    Load..
                </button>
            ) : null}
            <Products products={data} />
        </div>
    );
};

export default AxiosProduct;
