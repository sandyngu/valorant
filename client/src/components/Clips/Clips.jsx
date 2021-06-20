import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Video from '../Video/Video';
import './clips.scss';

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
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="header__clips">
                <Header />
            {this.state.clips.map(video => 
                <Video />)}    
            </div>
        )
    }
}

export default Clips;
