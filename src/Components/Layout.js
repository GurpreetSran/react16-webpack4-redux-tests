import React from 'react';
import CustomRoutes from '../CustomRoutes';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Layout = () => {
    return (
        <div className="main-wrapper">
            <Header />
            <CustomRoutes />
            <Footer />
        </div>
    );
}

export default Layout;