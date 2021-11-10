import React from 'react';
import axios from 'axios';
import $ from 'jquery';
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

        $(document).ready(function() {
            $(".clips__video-container").bind("mousewheel", function() {
                return false;
            });
        });

        var scrolled=0;

        $(document).ready(function(){  
            $(".clips__button--next").on("click" ,function(){
                scrolled=scrolled+1918;
                $(".clips__video-container").animate({
                        scrollTop:  scrolled
                });
                window.scrollTo(0,600);
            });
            
            $(".clips__button--back").on("click" ,function(){
                scrolled=scrolled-1918;
                $(".clips__video-container").animate({
                        scrollTop:  scrolled
                });
                window.scrollTo(0,600);
            });
        });

        return (
            <div className="clips">
                <div className="clips__heading-box"></div>
                <div className="clips__heading">
                    <div className="clips__heading-text">Friends' Clips</div>
                </div>
                <div className="clips__video-container">
                    {this.state.clips.map(video => 
                        <Video key={video.id} clipsData={this.state.clips}/>)}    
                </div>
                <div className="clips__body">
                <div className="clips__line"></div>
                <div className="clips__button-container">
                    <button className="clips__button--back">Back</button>
                    <button className="clips__button--next">Next</button>
                </div>
                <div className="clips__button-box"></div>
                <button className="clips__button--upload" onClick={() => this.uploadClick()} onMouseOver={() => this.uploadHover()} onMouseLeave={() => this.uploadLeave()}>Upload
                    <img src={Upload} className="clips__button-upload" alt="Upload Logo"/>
                </button>
                </div>
            </div>
        )
    }
}

export default FriendsClipsPage;
