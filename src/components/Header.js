import React from 'react';
// import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#explore-pizzas">Explore Pizzas</a></li>
                    <li><a href="#about-us">About Us</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;