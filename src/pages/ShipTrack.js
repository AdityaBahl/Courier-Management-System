import React from 'react';
import Navbar from '../components/Navbar';
import courierImage1 from '../images/courier-image-1.jpg';
//import courierImage2 from '../images/courier-image-2.jpg';
import Logo from '../images/logo1.svg';
const ShipTrack = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <div className="landing-page__container">
                <div className="landing-page__content">
                    <h1 className="landing-page__title">Welcome to </h1>
                    <div className="middle">
                        <img
                            src={Logo}
                            width="200"
                            height="200"
                            className="d-inline-block align-top"
                            alt="logo"
                        >
                        </img>
                    </div>
                    <h1 className="landing-page__title">Courier Management System</h1>
                    <p className="landing-page__description">
                        Manage your courier services efficiently with our Courier Management System. From shipment creation to tracking and delivery management, our system provides a comprehensive solution for your logistics needs.
                    </p>
                </div>
                <div className="landing-page__image-container">
                    <img src={courierImage1} alt="Courier Service" className="landing-page__image" />
                </div>
                {/*
                <div className="landing-page__image-container">
                    <img src={courierImage2} alt="Courier Service" className="landing-page__image" />
                </div>
                */}
            </div>
        </div>
    );
}
export default ShipTrack;