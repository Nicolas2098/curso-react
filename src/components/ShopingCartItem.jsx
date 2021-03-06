import React from 'react';

import icon_close from '@icons/icon_close.png';

const ShopingCartItem = () => {
    return (
        <div className="shopping-cart">
            <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"/>
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src={icon_close} alt="close"/>
      </div>
    );
};

export default ShopingCartItem;