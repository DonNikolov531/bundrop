import React from 'react';
import "../css/UserForm.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function UserForm(props) {

    const [paymentMethod, setPaymentMethod] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
    const [isCardNameValid, setIsCardNameValid] = useState(false);
    const [isCardNumberValid, setIsCardNumberValid] = useState(false);
    const [isExpiryDateValid, setIsExpiryDateValid] = useState(false);
    const [isCvvValid, setIsCvvValid] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted data:', props.firstName, props.lastName, props.phoneNumber);
        navigate('/confirmation');
    };

    const handleCardNameChange = (event) => {
        const cardName = event.target.value;
        if (cardName.trim() !== '') {
            setIsCardNameValid(true);
        } else {
            setIsCardNameValid(false);
        }
    }

    const handleCardNumberChange = (event) => {
        let cardNumber = event.target.value.replace(/\s/g, ''); 
        cardNumber = cardNumber.match(/.{1,4}/g).join(' ');
        event.target.value = cardNumber; 
    
        if (cardNumber.replace(/\s/g, '').length === 16 && !isNaN(cardNumber.replace(/\s/g, ''))) {
            setIsCardNumberValid(true);
        } else {
            setIsCardNumberValid(false);
        }
    }

    const handleExpiryDateChange = (event) => {
        let expiryDate = event.target.value.replace(/\//g, ''); 
        if (expiryDate.length > 2) {
            expiryDate = expiryDate.slice(0, 2) + '/' + expiryDate.slice(2); 
        }
        event.target.value = expiryDate; 
    
        const expiryDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        if (expiryDateRegex.test(expiryDate)) {
            setIsExpiryDateValid(true);
        } else {
            setIsExpiryDateValid(false);
        }
    }

    const handleCvvChange = (event) => {
        const cvv = event.target.value;
        if (cvv.length === 3 && !isNaN(cvv)) {
            setIsCvvValid(true);
        } else {
            setIsCvvValid(false);
        }
    }

    const handlePhoneNumberChange = (event) => {
        const phoneNumber = event.target.value;
        if (phoneNumber.length === 10 && !isNaN(phoneNumber)) {
            setIsPhoneNumberValid(true);
        } else {
            setIsPhoneNumberValid(false);
        }
    }

    const isCardDetailsValid = isCardNameValid && isCardNumberValid && isExpiryDateValid && isCvvValid;

    return (
        <div className="user-form">
            <h1 className='uForm'>User Form</h1>
            <form className="handleSubmit" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={props.firstName}
                        onChange={(e) => props.setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={props.lastName}
                        onChange={(e) => props.setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <select onChange={(e) => props.setPaymentMethod(e.target.value)}>
                        <option value="" selected disabled>Payment</option>
                        <option value="swish">Swish</option>
                        <option value="bankcard">Bank Card</option>
                    </select>

                    {props.paymentMethod === "swish" && (
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        
                    )}
                    {props.paymentMethod === "swish" && (
                        <div className="swishDet">
                        <h1>ENTER PHONE NUMBER</h1>

                        {!isPhoneNumberValid && <p>Please enter a valid phone number.</p>}
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number"  onChange={handlePhoneNumberChange}/>

                        <p>Please enter Delivery Information.</p>
                        <input type="text" id="name" name="name" placeholder="Name"></input>
                        <input type="text" id="address" name="address" placeholder="Address"></input>
                        <input type="text" id="city" name="city" placeholder="City"></input>
                       
                    </div>
                    )}
                    {props.paymentMethod === "bankcard" && (
                    
                    <>
                    <label htmlFor="bankCard">Bank card:</label>
                    {/* <label htmlFor="bankexpirymonth">Bank expirymonth:</label> */}
                    </>
                    )}
                    {props.paymentMethod === "bankcard" && (
                      <div className="cardDet">
                      <h1>ENTER CARD DETAILS</h1>
                      {!isCardNameValid && <p>Please enter your name.</p>}
                      <input type="text" id="cardName" name="cardName" placeholder="Cardholder Name" onChange={handleCardNameChange} />

                      {!isCardNumberValid && <p>Please enter 16 numbers.</p>}                    
                      <input type="text" id="cardNumber" name="cardNumber" placeholder="Card Number" onChange={handleCardNumberChange} />

                      {!isExpiryDateValid && <p>Please enter month and year your card expires.</p>}
                      <input type="text" id="expiryDate" name="expiryDate" placeholder="Expiry Date (MM/YY)" onChange={handleExpiryDateChange} />  

                      {!isCvvValid && <p>Please enter 3 numbers.</p>}       
                      <input type="text" id="cvv" name="cvv" placeholder="CVV" onChange={handleCvvChange} />
                      
                        <p>Please enter Delivery Information.</p>
                      <input type="text" id="name" name="name" placeholder="Name"></input>
                      <input type="text" id="address" name="address" placeholder="Address"></input>
                      <input type="text" id="city" name="city" placeholder="City"></input>

                  </div>

                        
                        
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="address">Confirm Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={props.address}
                        onChange={(e) => props.setAddress(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={!(isCardDetailsValid || isPhoneNumberValid)}>Submit</button>
            </form>
        </div>
    );
}
