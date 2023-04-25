import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <button
                aria-label="Submit"
                onClick={(e) => {
                    navigate(`/order`)
                }}>Place Order</button>
        </>
    )
};
