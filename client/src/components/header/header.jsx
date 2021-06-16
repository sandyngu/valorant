import React from 'react';
import './header.scss';
import banner from '../../assets/images/val-banner-dark.png';
import Navigation from '../Navigation/Navigation';

function Header() {

    return (
        <div className="header">
            <img src={banner} className="header__banner" alt="Valorant Banner"/>
            <div className="header__name-container header__name-container1">
                <h1 className="header__name header__name1">Chawpsticks #NA1</h1>
            </div>
            <div className="header__name-container header__name-container2">
                <h1 className="header__name header__name2">Chawpsticks #NA1</h1>
            </div>
            <Navigation />
        </div>
    )
}

export default Header;
