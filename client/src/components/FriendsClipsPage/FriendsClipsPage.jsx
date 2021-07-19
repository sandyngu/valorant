import React from 'react';
import axios from 'axios';
import Video from '../Video/Video';
import Upload from '../../assets/images/upload.png';
import '../ClipsPage/clipspage.scss';

class FriendsClipsPage extends React.Component {

    state = {
        clips: []
    }

    componentDidMount() {
        axios.get('/friendsclips') 
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

    uploadHover = () => {
        document.querySelector('.clips__button-upload').classList.add('clips__button-upload--hover');
    }

    uploadLeave = () => {
        document.querySelector('.clips__button-upload').classList.remove('clips__button-upload--hover');
    }

    render() {
        return (
            <div className="clips">
                <div className="clips__heading-box"></div>
                <div className="clips__heading">
                    <div className="clips__heading-text">Friends' Clips</div>
                </div>
                {this.state.clips.map(video => 
                    <Video clipsData={this.state.clips} key={video.id} />)}    
                    <div className="clips__body">
                    <div className="clips__button-box"></div>
                    <button className="clips__button" onClick={() => this.uploadClick()} onMouseOver={() => this.uploadHover()} onMouseLeave={() => this.uploadLeave()}>Upload
                        <img src={Upload} className="clips__button-upload" alt="Upload Logo"/>
                    </button>
                </div>
            </div>
        )
    }
}

export default FriendsClipsPage;
