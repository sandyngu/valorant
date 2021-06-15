import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';
// import Logo from '../../assets/images/agents.png';

function Navigation() {
    return (
        <div className="nav">
            <nav className="nav">
                {/* <img src={Logo} alt="Logo" className="header__nav-list-logo"/> */}
                <ul className="nav-list">
                    <Link to='/clips' className="nav__link">
                        <li className="nav-list__link">Clips</li>
                    </Link>
                    <Link to='/gallery' className="nav__link">
                        <li className="nav-list__link">Gallery</li>
                    </Link>
                    <Link to='/clips' className="nav__link">
                        <li className="nav-list__link">Something</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;
