import React from 'react';
import logo from '../assets/logo.jpg'

const Header = (props) => {
    if (!props.visible) {
        return null;
    }

    const text = <div>The super header</div>;

    return (
        <div onClick={props.onHeaderClickHandler} className="logo">
            {text}
            {<img src={logo} alt='Header' />}
        </div>
    );
};

export default Header;