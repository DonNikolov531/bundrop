import { Link } from 'react-router-dom';
import "../css/Header.css"


const Header = () => {
    return (
        <header className="header">
            <img src={`http://localhost:3000/images/logo black.png`} style={{ maxHeight: 100 }}></img>
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-item">
                        <Link to="/" className="header-nav-link">Home</Link>
                    </li>
                    <li className="header-nav-item">
                        <Link to="/menu" className="header-nav-link">Menu</Link>
                    </li>
                    <li className="header-nav-item">
                        <Link to="/cart" className="header-nav-link">Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;