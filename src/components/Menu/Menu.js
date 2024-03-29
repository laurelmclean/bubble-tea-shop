import React from 'react';
import Drink from '../Drink/Drink';
import data from '../../drink-menu.js';
import { useState } from 'react';
import Receipt2 from '../Receipt/Receipt';
import './Menu.css'

function Menu() {
    const [order, setOrder] = useState({});

    const addToOrder = key => {
        setOrder(prevOrder => {
            console.log(prevOrder)
            return { ...prevOrder, [key]: prevOrder[key] + 1 || 1 };
        });
    };

    const removeFromOrder = key => {
        setOrder(prevOrder => {
            const newOrder = { ...prevOrder };
            delete newOrder[key];
            return newOrder;
        });
    };

    const [query, setQuery] = useState('');
    const drinks = data.filter((obj) => {
        // true if query is in title
        const inName = obj.name.toLowerCase().includes(query.toLowerCase())
        return inName
    }).map(({ name, image, desc, price }) => {
        return (
            <Drink
                key={name}
                name={name}
                image={image}
                desc={desc}
                price={price}
                addToOrder={addToOrder}
            />
        )
    });

    return (
        <article className="menu-container">
            <section className="drinks-column">
                <form>
                    <input
                        value={query}
                        placeholder="search 🧋 drink name..."
                        onChange={(evt) => setQuery(evt.target.value)}
                        aria-label="Search by drink name"
                    />
                </form>
                {drinks.length > 0 ? drinks : "No results match your search"}
            </section>
            <section className="receipt-column">
                <Receipt2 order={order} removeFromOrder={removeFromOrder} />
            </section>
        </article>
    )
};

export default Menu;
