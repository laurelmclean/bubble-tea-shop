import React from "react";
import { useNavigate } from 'react-router-dom';
import './Home.css'

export default function Home() {
    const navigate = useNavigate();
    return (
        <section className="home">
          <button
            aria-label="Submit"
            onClick={(e) => {
              navigate(`/order`)
            }}>Place Order</button>
        </section>
      )
};
