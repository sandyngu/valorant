import React from 'react';
import banner from '../../assets/images/val-banner-dark.png';
import Navigation from '../Navigation/Navigation';
import './clips.scss';

function Clips() {
    return (
        <div className="header__clips">
            <img src={banner} className="header__clips-banner" alt="Valorant Banner"/>
            <div className="header__clips-name-container header__clips-name-container1">
                <h1 className="header__clips-name header__clips-name1">Chawpsticks #NA1</h1>
            </div>
            <div className="header__clips-name-container header__clips-name-container2">
                <h1 className="header__clips-name header__clips-name2">Chawpsticks #NA1</h1>
            </div>
            <Navigation />
        </div>
    )
}

export default Clips;
