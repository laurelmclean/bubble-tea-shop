import React from "react";
import { useNavigate } from 'react-router-dom';
import './Home.css'

export default function Home() {
    const navigate = useNavigate();
    return (
        <article className="home">
            <section className="home-menu">
                <h1>Welcome to Laurel's Bubble Tea Garden</h1>
                <h2>Discover a world of delicious flavors</h2>
                <button
                    aria-label="Submit"
                    onClick={(e) => {
                        navigate(`/order`)
                    }}>View Menu</button>
            </section>
            <section className="home-about">
                <h1>Handcrafted Bubble Tea Made Just for You</h1>
                <h2>High-quality ingredients and fresh fruit</h2>
                <button
                    aria-label="Submit"
                    onClick={(e) => {
                        navigate(`/about`)
                    }}>Learn More</button>
            </section>
        </article>
    )
};
