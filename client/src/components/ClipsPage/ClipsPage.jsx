import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
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

    render() {
        return (
            <>
            <Header />
            <div className="clips">
                <div className="clips__heading-box"></div>
                <div className="clips__heading">
                    <div className="clips__heading-text">My Clips</div>
                </div>
                {this.state.clips.map(video => 
                    <Video clipsData={this.state.clips} />)}    
                    <div className="clips__body">
                </div>
            </div>
            </>
        )
    }
}

export default Clips;
