import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (Api) => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
       const response = await axios(Api); 
       setProducts(response.data);
    },[]);
    return products;
};

export default useGetProducts;