import React from 'react';
import Jett from '../../assets/images/jett.gif';
import './home.scss';

function Home() {

    const trackerAPIKey = "75000a71-51ac-4a26-8f83-87119556c816";
    const riotAPIKey = "RGAPI-d3c98792-673b-4a52-bd41-96ce5ec0dd01";

    
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
