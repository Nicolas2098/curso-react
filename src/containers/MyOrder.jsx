import React, {useContext} from 'react';
import '@styles/MyOrder.scss';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import flechita from '@icons/flechita.svg';

const MyOrder = () => {

    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (acum, currentValue) => acum + currentValue.price;
        const sum = state.cart.reduce(reducer,0);
        return sum;
    }

    return (
    <aside className="product-detail">
        <div className="title-container">
            <img src={flechita} alt="arrow"/>
            <p className="title">My order</p>
            </div>

            <div className="my-order-content">
            <div className="my_order_shopping-cart">
                { state.cart.map(product => (
                    <OrderItem product = {product} key={ `orderItem-${product.id}`}/>
                    
                ))}
            </div>

            <div className="order">
                <p>
                <span>Total</span>
                </p>
                <p>${sumTotal()}</p>
            </div>

            <button className="primary-button">
                Checkout
            </button>
        </div>
  </aside>
    );
};

export default MyOrder;