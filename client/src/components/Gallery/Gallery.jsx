import React from 'react';
import banner from '../../assets/images/val-banner-dark.png';
import Navigation from '../Navigation/Navigation';
import './gallery.scss';

function Gallery() {
    return (
        <div className="header__gallery">
            <img src={banner} className="header__gallery-banner" alt="Valorant Banner"/>
            <div className="header__gallery-name-container header__gallery-name-container1">
                <h1 className="header__gallery-name header__gallery-name1">Chawpsticks #NA1</h1>
            </div>
            <div className="header__gallery-name-container header__gallery-name-container2">
                <h1 className="header__gallery-name header__gallery-name2">Chawpsticks #NA1</h1>
            </div>
            <Navigation />
        </div>
    )
}

export default Gallery;
