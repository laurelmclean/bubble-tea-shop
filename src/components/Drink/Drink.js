import React from "react";
import formatPrice from "../../helpers";

function Drink(props) {
        const { image, name, price, desc } = props;
        return (
            <li>
                <img src={image} width="300" height="300" alt={name} />
                <h3>
                    {name}
                    {formatPrice({price})}
                </h3>
                <p>{desc}</p>
                <button
                    onClick={() => this.props.addToOrder(this.props.index)}
                >
                    Add to Order
                </button>
            </li>
        );
}

export default Drink;