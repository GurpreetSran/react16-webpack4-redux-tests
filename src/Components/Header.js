import React from 'react';

const Header = () => {
    // const styles = {
    //     'width': '100%',
    //     'height': '100%'
    // };
    return (
        <div className="logo">
            <img src={require('../assets/LogoImage.jpg')} />
        </div>
    );
};

export default Header;