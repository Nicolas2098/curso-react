import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (Api) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const response = await axios(Api); 
            setProducts(response.data);
        }
        fetchData();
    },[]);
    return products;
};

export default useGetProducts;