import React from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom'; 

const Header = (props) => {
    if (!props.visible) {
        return null;
    }

    const text = <div>The super header</div>;

    return (
        <React.Fragment>
            <div onClick={props.onHeaderClickHandler} className="logo">
                {text}
                {<img src={logo} alt='Header' />}
            </div>
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
        </React.Fragment>

    );
};

export default Header;