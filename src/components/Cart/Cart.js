import React from 'react';
import './Cart.css'

function Cart() {
    return (
        <div className="cart-container">
            <img src={`${process.env.PUBLIC_URL}/images/jasmine.jpg`}
                height="300px"
                alt="Matcha Bubble Tea"
            />            <
                h2>Thank You for Your Order from Laurel's Bubble Tea Garden!</h2>
            <p>Your drink order has been received and will be made shortly.</p>
        </div>
    )
};

export default Cart;
