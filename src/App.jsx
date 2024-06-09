import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home.jsx';
import Menu from "./components/Menu.jsx";
import Header from "./components/Header.jsx";
import Cart from "./components/Cart.jsx";
import "./css/App.css";
import UserForm from './components/UserForm.jsx';
import PurchaseConfirmation from './components/PurchaseConfirmation.jsx';

const App = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [bankCard, setBankCard] = useState('');
  const [itemInCart, setItemInCart] = useState([]);

  const handleClick = (item) => {
    const existingItem = itemInCart.find(i => i.name === item.name);
    if (existingItem) {
        const newCart = [...itemInCart];
        const index = newCart.findIndex(i => i.name === item.name);
        newCart[index].quantity++;
        setItemInCart(newCart);
    } else {
        setItemInCart(prevItems => [...prevItems, { ...item, quantity: 1 }]);
    }
};

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu handleClick={handleClick} />} />
        <Route path="/cart" element={<Cart inCart={itemInCart} setItemInCart={setItemInCart} />} />
        <Route path="/form" element={
          <UserForm paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod}
            bankCard={bankCard} setBankCard={setBankCard} setItemInCart={setItemInCart}
            firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName}
            phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} address={address} setAddress={setAddress} />}>
        </Route>
        <Route path='/confirmation' element={<PurchaseConfirmation itemInCart={itemInCart} firstName={firstName} lastName={lastName} phoneNumber={phoneNumber} bankCard={bankCard} paymentMethod={paymentMethod} address={address} />} />
      </Routes>
    </Router>
  );
};

export default App;
