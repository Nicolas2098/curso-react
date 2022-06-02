import React, {useEffect, useState} from 'react';
import '@styles/ProjectList.scss';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';

const Api = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const products = useGetProducts(Api);

    return (
        <section class="main-container">
            <div class="cards-container">
                {products.map(product => (
                    <ProductItem product={product} key={product.id}/>    
                ))}
            </div>
        </section>
    );
};

export default ProductList;