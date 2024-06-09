import React from 'react';
import "../css/PurchaseConfirmation.css";

export default function PurchaseConfirmation({ firstName, lastName, phoneNumber, itemInCart, bankCard, paymentMethod, address }) {

    const total = itemInCart.reduce((sum, item) => sum + item.price, 0);

    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className="purchase-confirmation">
            <h2 className="thank-You">Thank you for your purchase!</h2>
            <p className='item'>Name: {firstName} {lastName}</p>
            {paymentMethod === "swish" ? (
                <p className="item">Payment (Phone Number): {phoneNumber}</p>
            ) : (
                <p className="item">Payment (Bank Card): {bankCard}</p>
            )}
            <p className='item'>Total Paid: {total}</p>
            <p className='item'>Delivered in: {getRandomInteger(20, 45)} minutes</p>
            <p className='item'>Address: {address}</p>
            <br></br>
            <p className='item'>Items Bought:</p>
            <ul className='content'>
                {itemInCart.map(item => (
                    <li className='liContent' key={item.id}>{item.name} - ${item.price}</li>
                ))
                }
            </ul>
        </div >
    );
}
