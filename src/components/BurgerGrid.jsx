import React from 'react';
import Burger from './Burger';
import "../css/BurgerGrid.css";

export default function BurgerGrid({ burgers, handleClick }) {
    return (
        <div className="burger-grid">
            {burgers.map((burger, index) => (
                <Burger
                    burger={burger}
                    key={index}
                    name={burger.name}
                    description={burger.description}
                    image={burger.image}
                    price={burger.price}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
}
