import React from 'react';
import '../styles/Order.scss'

const Order = () => {
    return (
        <div className="order">
            <p>
                <span>03.25.21</span>
                <span>6 articles</span>              
            </p>
            <p>$560.00</p>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"></img>
        </div>
    );
};

export default Order;