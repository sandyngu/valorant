import React from 'react';
import axios from 'axios';
import Video from '../Video/Video';
import '../ClipsPage/clipspage.scss';

class Clips extends React.Component {

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

    render() {
        return (
            <>
            <div className="clips">
                <div className="clips__heading-box"></div>
                <div className="clips__heading">
                    <div className="clips__heading-text">Friends' Clips</div>
                </div>
                {this.state.clips.map(video => 
                    <Video clipsData={this.state.clips}/*key={video.id}
                    date={video.date}
                    agent={video.agent}
                    video={video.video}
                    description={video.description}*/ />)}    
                    <div className="clips__body">
                </div>
            </div>
            </>
        )
    }
}

export default Clips;
