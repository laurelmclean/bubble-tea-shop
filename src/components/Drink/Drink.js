import React from "react";
import formatPrice from "../../helpers";
import './Drink.css';

function Drink(props) {
        const { image, name, price, desc, addToOrder, index } = props;
        return (
            <li className="menu-drinks">
                <img src={image} width="300" height="300" alt={name} />
                <h3 className="drinks-name">
                    {name}
                    {formatPrice(price)}
                </h3>
                <p>{desc}</p>
                <button
                    onClick={() => addToOrder(name, price)}
                >
                    Add to Order
                </button>
            </li>
        );
}

export default Drink;
