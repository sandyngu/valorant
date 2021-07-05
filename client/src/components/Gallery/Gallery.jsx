import React from 'react';
// import banner from '../../assets/images/val-banner-dark.png';
// import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import './gallery.scss';

function Gallery() {
    return (
        <>
        <Header />
        <div className="gallery">
        <div className="clips__heading-box"></div>
                <div className="clips__heading">
                    <div className="clips__heading-text">Gallery</div>
                </div>
        </div>
        </>
    )
}

export default Gallery;
