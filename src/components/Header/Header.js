import React from "react";
import './Header.css';
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <section className="Title">
            <header>
                <div>
                <h1>🧋 Laurel's Bubble Tea Garden</h1>
                <h2 className="Title-Subtitle">Where every sip is a delight!</h2>
                </div>
                <nav className="menuItems" role="navigation">
                    <NavLink
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                        to="/">Home</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                        to="/order">Menu</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                        to="/about">About</NavLink>
                </nav>
            </header>
        </section>
    )
};
