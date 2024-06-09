import React, { useState, useEffect } from 'react';
import BurgerGrid from "./BurgerGrid.jsx";
import Cart from './Cart.jsx';
import "../css/Filter.css"

export default function MenuList({ handleClick }) {
    const [menu, setMenu] = useState([]);
    const [filterType, setFilterType] = useState('all'); // New state variable for the filter type

    useEffect(() => {
        fetch('http://localhost:3000/menu')
            .then(response => response.json())
            .then(data => setMenu(data));
    }, []);

    

    const burgers = menu
        .filter(item => filterType === 'all' || item.category === filterType) // Filter the items based on the selected type
        .map(item => ({ name: item.name, description: item.description, image: item.img, price: item.price, type: item.category }));

    const handleFilterChange = (newType) => { // New function to update the filter type
        setFilterType(newType);
    };

    return (
        <>
             <div className='filterContainer'>
                <button onClick={() => handleFilterChange('all')}>All</button>
                <button onClick={() => handleFilterChange('burgers')}>Burgers</button>
                <button onClick={() => handleFilterChange('sides')}>Sides</button>
                <button onClick={() => handleFilterChange('desserts')}>Desserts</button>
                <button onClick={() => handleFilterChange('drinks')}>Drinks</button>
            </div>
            <BurgerGrid burgers={burgers} handleClick={handleClick} />
            
        </>
    );
}