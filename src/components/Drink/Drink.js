import React from "react";
import formatPrice from "../../helpers";
import './Drink.css';

function Drink(props) {
        const { image, name, price, desc, addToOrder } = props;
        return (
            <article className="menu-drinks">
                <img src={image} width="150" height="150" alt={name} />
                <h3 className="drinks-name">
                    {name}
                    <br/>
                    {formatPrice(price)}
                </h3>
                <p>{desc}</p>
                <br/>
                <button
                    onClick={() => addToOrder(name, price)}
                >
                    Add to Order
                </button>
            </article>
        );
}

export default Drink;
