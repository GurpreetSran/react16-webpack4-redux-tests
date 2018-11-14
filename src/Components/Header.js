import React from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom'; 

const Header = (props) => {
    const text = <div>The super header</div>;

    return (
        <React.Fragment>
            <div className="logo">
                {text}
                {<img src={logo} alt='Header' />}
            </div>
        </React.Fragment>

    );
};

export default Header;