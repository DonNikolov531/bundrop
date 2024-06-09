import React from 'react';
import "../css/Burger.css";

export default function Burger({ name, description, image, price, handleClick, burger }) {
    return (
        <div className="burger-card">
            <img className="burger-image" src={`http://localhost:3000/images/${image}`} style={{ maxHeight: 100 }}></img>
            <h2 className="burger-name">{name}</h2>
            <p className="burger-description">{description}</p>
            <p className="burger-description">{price}</p>
            <button onClick={() => handleClick(burger)}>Add to Cart</button>
        </div>
    );
}

