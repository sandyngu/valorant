import React from 'react';
import video from '../../assets/images/brim dif.m4v';
import './video.scss';

function Video(props) {
    console.log(props)

    return (
        <div className="video">
            <h2 className="video__heading">Clips</h2>
            <div className="video-container">
                <div className="video__clip-container">
                    <video className="video__clip" controls src={video} type="video/mp4"/>
                    <div className="video__clip-text">
                        <div className="video__clip-text-container">
                            <p className="video__clip-text-date">02.17.1993</p>
                            <p className="video__clip-text-agent">Brimstone</p>
                        </div>
                        <div className="video__clip-description-container">
                            <p className="video__clip-text-description">4K Clutch</p>
                        </div>
                    </div>
                </div>
                <div className="video__clip-container">
                    <video className="video__clip" controls src={video} type="video/mp4"/>
                    <div className="video__clip-text">
                        <div className="video__clip-text-container">
                            <p className="video__clip-text-date">02.17.1993</p>
                            <p className="video__clip-text-agent">Brimstone</p>
                        </div>
                        <div className="video__clip-description-container">
                            <p className="video__clip-text-description">4K Clutch</p>
                        </div>
                    </div>
                </div>
                <div className="video__clip-container">
                    <video className="video__clip" controls src={video} type="video/mp4"/>
                    <div className="video__clip-text">
                        <div className="video__clip-text-container">
                            <p className="video__clip-text-date">02.17.1993</p>
                            <p className="video__clip-text-agent">Brimstone</p>
                        </div>
                        <div className="video__clip-description-container">
                            <p className="video__clip-text-description">4K Clutch ez res sage ace</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video;
