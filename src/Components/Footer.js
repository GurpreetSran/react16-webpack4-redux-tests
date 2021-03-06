import React from 'react';
import { Link } from 'react-router-dom'; 

const Footer = () => {
    return (
        <ul className="navigation">
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/list">
                    List
                </Link>
            </li>
        </ul>     
    );
};

export default Footer;