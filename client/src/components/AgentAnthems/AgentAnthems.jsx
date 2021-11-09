import React from 'react';
import VideoBorder from '../../assets/images/videoclipbackground.png';
import './agentanthems.scss';

function AgentAnthems() {
    return (
        <div className="agentanthems">
            <div className="clips__heading-box"></div>
            <div className="clips__heading">
                <div className="clips__heading-text">Agent Anthems</div>
            </div>
            <img src={VideoBorder} className="agentanthems__video--main-border" alt="Main Video Border"/>
            <div className="agentanthems__video-container">
                <center><iframe className="agentanthems__video agentanthems__video--main" src="https://www.youtube.com/embed/b0DByLCT79k" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
                <br/><iframe className="agentanthems__video"  src="https://www.youtube.com/embed/-PEFc1JWX_E" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="agentanthems__video" src="https://www.youtube.com/embed/4ojKkWX-1PA" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="agentanthems__video" src="https://www.youtube.com/embed/_DAwQ9XfLg4" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="agentanthems__video" src="https://www.youtube.com/embed/hoiZg_wtPgA" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="agentanthems__video" src="https://www.youtube.com/embed/SDFtGK8RrnE" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="agentanthems__video" src="https://www.youtube.com/embed/5LDsJvjvUuU" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="agentanthems__video" src="https://www.youtube.com/embed/BZMZpj02zWk" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="agentanthems__video" src="https://www.youtube.com/embed/r9_oDHsbHiw" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="agentanthems__video" src="https://www.youtube.com/embed/7ZyB5XZxJiw" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="agentanthems__video" src="https://www.youtube.com/embed/aIi5-5urOlQ" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="agentanthems__video" src="https://www.youtube.com/embed/0H4AKUe0ipM" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="agentanthems__video" src="https://www.youtube.com/embed/AdIFnn3E4-E" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="agentanthems__video" src="https://www.youtube.com/embed/5wC6Dex6dNc" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="agentanthems__video" src="https://www.youtube.com/embed/98fnAXUctwE" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="agentanthems__video" src="https://www.youtube.com/embed/8bERWeEGNjs" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="clips__body"></div>
        </div>
    )
}

export default AgentAnthems;
