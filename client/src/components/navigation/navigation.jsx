import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';
import Logo from '../../assets/images/val-logo.png';

function Navigation(props) {

    return (
        <div className="nav">
            <nav className="nav">
                <ul className="nav-list">
                    <Link to ='/' className="nav__button" onClick={() => props.changeHomeBanner()}>
                        <img src={Logo} alt="Logo" className="nav-list-logo"/>
                    </Link>/ /
                    <Link to='/clips' className="nav__link" onClick={() => props.changeClipsBanner()}>
                        <li className="nav-list__link nav-list__link-clips">My Clips</li>
                    </Link>/ /
                    <Link to='/friendsclips' className="nav__link" onClick={() => props.changeFriendsBanner()}>
                        <li className="nav-list__link nav-list__link-friendsclips">Friends' Clips</li>
                    </Link>/ /
                    <Link to='/gallery' className="nav__link" onClick={() => props.changeGalleryBanner()}>
                        <li className="nav-list__link nav-list__link-gallery">Gallery</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;
