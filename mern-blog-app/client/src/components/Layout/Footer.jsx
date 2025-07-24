import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} My Blog Application. All rights reserved.</p>
                <p>
                    <a href="/about">About</a> | <a href="/contact">Contact</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;