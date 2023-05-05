import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import Video from '../Video/Video';
import Upload from '../../assets/images/upload.png';
import Flip from '../../assets/images/flip.png';
import './clipspage.scss';

class ClipsPage extends React.Component {

    state = {
        clips: [],
        url: "https://drive.google.com/uc?export=download&id=1zl54K3VxN9ZwPQk0Mp5e3YxaS98Q5X0V"
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

    flipHover = () => {
        document.querySelector('.clips__button-reverse').classList.add('clips__button-reverse--hover');
    }
    
    flipLeave = () => {
        document.querySelector('.clips__button-reverse').classList.remove('clips__button-reverse--hover');
    } 

    flip = () => {
        let a = this.state.clips[0];
        let b = a.slice().reverse();
        
        if (this.state.clips[0][0].id !== 5) {
            document.querySelector('.clips__button--reverse-text').innerHTML="Oldest";
            $(".clips__video-container").scrollTop(0);
            this.setState({
                clips: [a]
            })
        } else if (this.state.clips[0][0].id === 5) {
            document.querySelector('.clips__button--reverse-text').innerHTML="Recent";
            $(".clips__video-container").scrollTop(0);
            this.setState({
                clips: [a]
            });
        };
    };
    
    render() {

        var scrolled=0;
 
            $(".clips__button--next").on("click" ,function(){
                scrolled=scrolled+1897;
                $(".clips__video-container").animate({
                        scrollTop:  scrolled
                });
                window.scrollTo(0,850);
            });
            
            $(".clips__button--back").on("click" ,function(){
                scrolled=scrolled-1897;
                $(".clips__video-container").animate({
                        scrollTop:  scrolled
                });
                window.scrollTo(0,850);
            });


    return (
        <div className="clips">
            <div className="clips__heading-box"></div>
            <div className="clips__heading">
                <div className="clips__heading-text">Chawp's Clips</div>
            </div>
            <button className="clips__button--reverse clips__button--reverse-new" onClick={() => this.flip()} onMouseOver={() => this.flipHover()} onMouseLeave={() => this.flipLeave()}>
                Sort by: <span className="clips__button--reverse-text">Recent</span>
                <img src={Flip} className="clips__button-reverse" alt="Reverse Logo"/>
            </button>
            <div className="clips__video-container" id="div">
                {this.state.clips.map(video => 
                    <Video key={video.id} clipsData={this.state.clips} url={this.state.url}/>)    
                }
            </div>
            <div className="clips__body"></div>
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

    )
    }
}

export default ClipsPage;
