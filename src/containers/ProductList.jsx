import React from 'react';
import '@styles/ProjectList.scss';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';

const Api = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const products = useGetProducts(Api);

    return (
        <section className="main-container">
            <div className="cards-container">
                {products.map(product => (
                    <ProductItem product={product} key={product.id}/>
                ))}
            </div>
        </section>
    );
};

export default ProductList;