import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Video from '../Video/Video';
import './clipspage.scss';

class Clips extends React.Component {

    state = {
        clips: []
    }

    componentDidMount() {
        axios.get('/clips') 
        .then(res => {
            this.setState({
                clips: [res.data]
            })
        })
        .catch(err => console.log(err))
    }

    uploadClick = () => {
        document.querySelector('.nav__link-upload').click();
    }

    render() {
        return (
            <>
            <div className="clips">
                <div className="clips__heading-box"></div>
                <div className="clips__heading">
                    <div className="clips__heading-text">My Clips</div>
                </div>
                <div className="clips__video-container">
                    {this.state.clips.map(video => 
                        <Video clipsData={this.state.clips} key={video.id}/>)}    
                </div>
                <div className="clips__body"></div>
                <div className="clips__line"></div>
                <div className="clips__button-box"></div>
                <button className="clips__button" onClick={() => this.uploadClick()}>Upload</button>
            </div>
            </>
        )
    }
}

export default Clips;
