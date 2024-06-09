import React, { useState, useEffect } from 'react';
import "../css/Home.css";

function Home() {
    const [burgers, setBurgers] = useState([]);
    const backgroundImageUrl = "http://localhost:3000/images/burgir2.jpg";

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "100vh"
    };

    useEffect(() => {
        fetch('http://localhost:3000/menu')
            .then(response => response.json())
            .then(data => {
                const allBurgers = data.filter(item => item.category === 'burgers');
                const randomBurgers = [];
                for(let i = 0; i < 4; i++) {
                    const randomIndex = Math.floor(Math.random() * allBurgers.length);
                    randomBurgers.push(allBurgers[randomIndex]);
                    allBurgers.splice(randomIndex, 1);
                }
                setBurgers(randomBurgers);
            });
    }, []);

    return (
        <>
            <div className="container" style={containerStyle}>
                <p className='homeText'>Welcome to Bun Drop!</p>
                <p className='homeText'>Order your burgers by drone!</p>
            </div>
            <div className="home-text">
            <h1>Our Most Popular Burgers</h1>
            </div>
            <div className="burger-grid2"> 
                {burgers.map(burger => ( 
                    <div key={burger.id} className="burger-card2">
                        <img src={`http://localhost:3000/images/${burger.img}`} alt={burger.name} />
                        <h3>{burger.name}</h3>
                        <p>{burger.price} :-</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
