import React from 'react';
import Jett from '../../assets/images/jett.gif';
import './home.scss';

function Home() {
    
    return (
        <div className="home">
            <div className="clips__heading-box"></div>
                <div className="clips__heading">
                    <div className="clips__heading-text">Welcome,</div>
                </div>
            <img src={Jett} alt="Jett" className="home__jett"/>
        </div>
    )
}

export default Home;
