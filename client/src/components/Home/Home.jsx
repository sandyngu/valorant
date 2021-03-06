import React from 'react';
import Jett from '../../assets/images/jett.gif';
import './home.scss';

function Home() {

    function clipsPage() {
        document.querySelector('.nav-list__link-clips').click();
        window.scrollTo(0, 0);
    }

    function friendsClipsPage() {
        document.querySelector('.nav-list__link-friendsclips').click();
        window.scrollTo(0, 0);
    }

    function agentAnthemsPage() {
        document.querySelector('.nav-list__link-agentanthems').click();
        window.scrollTo(0, 0);
    }

    function galleryPage() {
        document.querySelector('.nav-list__link-gallery').click();
        window.scrollTo(0, 0);
    }

    return (
        <div className="home">
            <div className="clips__heading-box"></div>
            <div className="clips__heading">
                <div className="clips__heading-text">Welcome,</div>
            </div>
            <div className="home__container">
                <div className="home__box"></div>
                <div className="home__heading-container">
                    <div className="home__heading">Hello, welcome to <br/> Chawpsticks' <br/><span className="home__heading-val">Valorant</span> website.</div>
                </div>
                <div className="home__text-container">
                    <div className="home__text"><span className="home__text-first">VALORANT IS A 5v5 CHARACTER-BASED TACTICAL SHOOTER.</span> 
                        <br/><br/>Here you will be blessed with some of my highlight reels and my friends' highlight reels from the game. 
                        <span className="home__text--strike">I am hardstuck gold.</span> <span className="home__text--strike">I am finally plat!
                        </span> <span className="home__text--strike">I'm gold again...</span> I'M PLAT! and have spent an unhealthy amount of time on the game. Tracker.gg says I have spent 1300+ hours on the game. I have been playing since beta.
                        <br/><br/>Please feel free to browse around and join me on my journey to radiant. Enjoy the content, agent :).
                    </div>
                    <div className="home__text-line"></div>
                    <div className="home__text-button-container">
                        <div className="home__text-button-box home__text-button-box1"></div>
                        <button className="home__text-button home__text-button1" onClick={() => clipsPage()}>VIEW CHAWP'S CLIPS</button>
                        <div className="home__text-button-box home__text-button-box2"></div>
                        <button className="home__text-button home__text-button2" onClick={() => friendsClipsPage()}>VIEW MY FRIENDS' CLIPS</button>
                        <div className="home__text-button-box home__text-button-box3"></div>
                        <button className="home__text-button home__text-button3" onClick={() => agentAnthemsPage()}>LISTEN TO AGENT ANTHEMS</button>
                        <div className="home__text-button-box home__text-button-box4"></div>
                        <button className="home__text-button home__text-button4" onClick={() => galleryPage()}>VIEW THE GALLERY</button>
                    </div>
                </div>
                <img src={Jett} alt="Jett" className="home__jett"/>
            </div>
        </div>
    )
}

export default Home;
