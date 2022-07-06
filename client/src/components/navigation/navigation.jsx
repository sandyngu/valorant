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
                        <li className="nav-list__link nav-list__link-clips">CHAWP'S CLIPS</li>
                    </Link>/ /
                    <Link to='/friendsclips' className="nav__link" onClick={() => props.changeFriendsBanner()}>
                        <li className="nav-list__link nav-list__link-friendsclips">FRIENDS' CLIPS</li>
                    </Link>/ /
                    <Link to='/agentanthems' className="nav__link" onClick={() => props.changeAgentsBanner()}>
                        <li className="nav-list__link nav-list__link-agentanthems">AGENT ANTHEMS</li>
                    </Link>/ /
                    <Link to='/gallery' className="nav__link" onClick={() => props.changeGalleryBanner()}>
                        <li className="nav-list__link nav-list__link-gallery">GALLERY</li>
                    </Link>
                    <Link to='/upload' className="nav__link-upload" onClick={() => props.changeUploadBanner()}></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;
