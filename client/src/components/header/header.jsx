import React from 'react';
import './header.scss';
import banner from '../../assets/images/val-banner2.jpg';

function header() {
    return (
        <div className="header">
            <img src={banner} className="header__banner" alt="Valorant Banner"/>
            <h1 className="header__name">Chawpsticks #NA1</h1>
            <p className="text">Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.</p>
            
        </div>
    )
}

export default header;
