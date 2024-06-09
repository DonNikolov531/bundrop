import "../css/Cart.css"
import { useNavigate } from 'react-router-dom';

export default function Cart({ inCart, setItemInCart }) {
    console.log("inCart", inCart)
    let totalSum = 0;

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/form');
    };

    const increaseQuantity = (item) => {
        const newCart = [...inCart];
        const index = newCart.findIndex(i => i.name === item.name);
        newCart[index].quantity++;
        setItemInCart(newCart);
    };

    const decreaseQuantity = (item) => {
        const newCart = [...inCart];
        const index = newCart.findIndex(i => i.name === item.name);
        if (newCart[index].quantity > 1) {
            newCart[index].quantity--;
        } else {
            newCart.splice(index, 1);
        }
        setItemInCart(newCart);
    };

    const deleteItem = (itemToDelete) => {
        setItemInCart(prevItems => prevItems.filter(item => item.name !== itemToDelete.name));
    };

    return (
        <div className="cart-page">
            <h1>Cart</h1>
            {inCart.map(item => {
                { totalSum += parseInt(item.price) * item.quantity }
            })}

            <h2>Total: {totalSum} SEK</h2>

            <div className="cart-items">
            {inCart.length > 0 ? inCart.map((item, index) => (
            <div key={index} className="cart-item">
            <div className="cart-item-price"> 
            <span className="item-name">{item.name}</span>
            <span className="item-price">{item.price * item.quantity} :-</span>
            </div> 
            <div className="button-items">
            <button className="decrease-button" onClick={() => decreaseQuantity(item)}>-</button>
            <span>{item.quantity}</span>
            <button className="increase-button" onClick={() => increaseQuantity(item)}>+</button>
            <button className="delete-button" onClick={() => deleteItem(item)}>Delete</button>
            </div>
        </div>
    )) : <h1>Empty Cart</h1>}
</div>
            <div className="button-container">
                {inCart.length > 0 ?
                    <>
                        <button className="empty-button" onClick={emptyCart}>
                            Empty Cart
                        </button>
                        <button className="continue-button" onClick={handleButtonClick}>
                            Continue
                        </button>
                    </> : <></>}
            </div>
        </div>
    );

    async function emptyCart() {
        setItemInCart([]);
    }

}
