import React from 'react';
import { Link } from 'react-router-dom';
import Jett from '../../assets/images/jett.gif';
import './home.scss';

function Home(props) {

    const trackerAPIKey = "75000a71-51ac-4a26-8f83-87119556c816";
    const riotAPIKey = "RGAPI-d3c98792-673b-4a52-bd41-96ce5ec0dd01";

    
    return (
        <div className="home">
            <div className="clips__heading-box"></div>
            <div className="clips__heading">
                <div className="clips__heading-text">Welcome,</div>
            </div>
            <div className="home__container">
                <div className="home__box"></div>
                <div className="home__heading">Hello, welcome to Chawpsticks' <br/><span className="home__heading-val">Valorant</span> website.</div>
                <div className="home__text-container">
                    <div className="home__text"><span className="home__text-first">Valorant is a 5v5 character-based tactical shooter.</span> 
                        <br/><br/>Here you will be blessed with some of my highlight reels and my friends' highlight reels from the game. I am hardstuck gold and have spent an unhealthy amount of time on the game. Tracker.gg says I have spent almost 1100 hours on the game. I have been playing since beta.
                    </div>
                    <div className="home__text-button-box"></div>
                    <Link to='/clips' onClick={() => props.changeClipsBanner()}>
                        <button className="home__text-button">View My Clips</button>
                    </Link>
                </div>
                <img src={Jett} alt="Jett" className="home__jett"/>
            </div>
        </div>
    )
}

export default Home;
