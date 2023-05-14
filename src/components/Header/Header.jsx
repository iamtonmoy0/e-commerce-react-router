import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate=useNavigate()
    const homeNavigation=()=>[
        navigate(`/`)
    ]
    return (
        <nav className='header'>
            <img src="a.png" alt="" onClick={homeNavigation} />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;