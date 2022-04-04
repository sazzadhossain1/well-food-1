import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';



const Header = () => {
    return (
        <div className='nav-parent' >
            <div className='navigation'>
            <h1 className='brand-name'>Well Food</h1>
            <nav >
            <Link to="Home">Home</Link>
            <Link to="Reviews">Reviews</Link>
            <Link to="Dashboard">Dashboard</Link>
            <Link to="Blogs">Blogs</Link>
            <Link to="About">About</Link>
            </nav>
            
            </div>
        </div>
    );
};

export default Header;