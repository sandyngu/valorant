import axios from 'axios';
import React from 'react';
// import banner from '../../assets/images/val-banner-dark.png';
// import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import './clips.scss';

class Clips extends React.Component {

    state = {
        clips: []
    }

    componentDidMount() {
        axios.get('/clips') 
        .then(res => {
            this.setState({
                clips: res.data
            })
        })
    }

    render() {
        return (
            <div className="header__clips">
                <Header />
            </div>
        )
    }
}

export default Clips;
