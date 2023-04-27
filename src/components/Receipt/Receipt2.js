import React from "react";
import formatPrice from "../../helpers";
import data from '../../drink-menu.js';
import { useNavigate } from 'react-router-dom';
import './Receipt.css'

function Receipt2 ({ order, removeFromOrder }) {
    // get array of drink names in the order object
    //map over array to create array of objects
    const items = Object.keys(order).map((drinkName) => {
        //look up quantity based on order key
      const quantity = order[drinkName];
      // use data to look up price based on drink name
      const { price } = data.find((drink) => drink.name === drinkName);
      const cost = quantity * price;
      return { drinkName, quantity, price, cost };
    });
  
    const total = items.reduce((acc, { cost }) => acc + cost, 0);

    const navigate = useNavigate();
  
    return (
      <div>
        <h2>Order Summary</h2>
        <ul>
          {items.map(({ drinkName, quantity, price, cost }) => (
            <li className="drink-order" key={drinkName}>
              {drinkName} x {quantity} @ {formatPrice(price)} = {formatPrice(cost)}
              <button className="remove-button" onClick={() => removeFromOrder(drinkName)}>X</button>
            </li>
          ))}
        </ul>
        <h3>Total: {formatPrice(total)}</h3>
        <button onClick={(e) => {
                    navigate(`/cart`)}}>Checkout 🛒</button>
      </div>
    );
  };

export default Receipt2;
