import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Video from '../Video/Video';
import Upload from '../../assets/images/upload.png';
import './clipspage.scss';

class ClipsPage extends React.Component {

    state = {
        clips: [],
        showClips: [],
        page: 1
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
    
    uploadHover = () => {
        document.querySelector('.clips__button-upload').classList.add('clips__button-upload--hover');
    }
    
    uploadLeave = () => {
        document.querySelector('.clips__button-upload').classList.remove('clips__button-upload--hover');
    }
    
    showClips() {
        for (let i=0; i < this.state.clips.length; i++) {
            if (this.state.clips.length > 1) {
                this.state.showClips.pop(i);
                console.log(this.state.showClips)
            }
        }
    }   
    
    render() {

        $(document).ready(function() {
            $(".clips__video-container").bind("mousewheel", function() {
                return false;
            });
        });

        var scrolled=0;

        $(document).ready(function(){  
            $(".clips__next").on("click" ,function(){
                scrolled=scrolled+1918;
                $(".clips__video-container").animate({
                        scrollTop:  scrolled
                });
            });
            
            $(".clips__back").on("click" ,function(){
                scrolled=scrolled-1918;
                $(".clips__video-container").animate({
                        scrollTop:  scrolled
                });
            });
        });
    return (
        <>
        <div className="clips">
            <button className="clips__next">Next</button>
            <button className="clips__back">Back</button>
            <div className="clips__heading-box"></div>
            <div className="clips__heading">
                <div className="clips__heading-text">My Clips</div>
            </div>
            <div className="clips__video-container">
                {this.state.page===1 &&
                    this.state.clips.map(video => 
                        <Video clipsData={this.state.clips} key={video.id}/>)    
                }
            </div>
            <div className="clips__body"></div>
            <div className="clips__line"></div>
            <div className="clips__button-box"></div>
            <button className="clips__button" onClick={() => this.uploadClick()} onMouseOver={() => this.uploadHover()} onMouseLeave={() => this.uploadLeave()}>Upload
                <img src={Upload} className="clips__button-upload" alt="Upload Logo"/>
            </button>
        </div>
        </>
    )
    }
}

export default ClipsPage;
