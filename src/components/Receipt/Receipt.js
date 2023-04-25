import React from "react";
import formatPrice from "../../helpers";

function Receipt(removeFromOrder, order) {
    return (
        <div>
            <h1>Order</h1>
            {Object.keys(order).map(key => (
                <div key={key}>
                    {key}: {order[key]}
                    <button onClick={() => removeFromOrder(key)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default Receipt;
