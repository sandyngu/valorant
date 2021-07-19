import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './upload.scss';
import Brim from '../../assets/images/brimmy.gif';

class Upload extends React.Component {

    cancelForm = (e) => {
        const uploadForm = document.querySelector('.upload__form');
        uploadForm.reset();
        e.preventDefault();
    };

    uploadVideo = (e) => {
        e.preventDefault();

        const generatedId = uuidv4();
        
        const newVideo = {
            id: generatedId,
            date: e.target.date.value,
            agent: e.target.agent.value,
            video: e.target.video.value,
            description: e.target.description.value
        }

        if (e.target.code.value === "696969" && e.target.page.value === "Chawpsticks' Clips") {
            axios.post('/clips', {newVideo})
            .catch(err => console.log(err));
            console.log(newVideo)
            
            alert('New Video Successfully Uploaded!');
            this.cancelForm(e);
            document.querySelector('.nav-list__link-clips').click();

        } else if (e.target.code.value === "696969" && e.target.page.value === "Friends' Clips") {
            axios.post('/friendsclips', {newVideo})
            .catch(err => console.log(err));
            console.log(newVideo)
            
            alert('New Video Successfully Uploaded!');
            this.cancelForm(e);
            document.querySelector('.nav-list__link-friendsclips').click();

        } else {
            alert('The Code You Entered Was Incorrect, Upload Not Complete');
        }   
    };

    checkpage = (e) => {

        if (e.target.page.value === "Chawpsticks' Clips") {
            this.setState({
                forClips: true,
                forFriendsClips: false
            })
        } else if (e.target.page.value === "Friends' Clips") {
            this.setState({
                forClips: false,
                forFriendsClips: true
            })
        }
        console.log(e.target.page.value)
    }

    render() {

        return (
            <div className="upload">
                <div className="clips__heading-box"></div>
                    <div className="clips__heading">
                        <div className="clips__heading-text">Upload</div>
                    </div>
                <div className="upload__container">
                    <img src={Brim} className="upload__container-brim" alt="Brimstone Gif"/>
                    
                        <form className="upload__form" onSubmit={(e) => {this.uploadVideo(e)}}>
                            <label className="upload__form-title">Page:</label>
                            <select className="upload__form-dropdown upload__form-input" name="page">
                                <option className="upload__form-dropdown-option">Which page is this for?</option>
                                <option className="upload__form-dropdown-option" onClick={(e) => {this.checkPage(e)}}>Chawpsticks' Clips</option>
                                <option className="upload__form-dropdown-option" onClick={(e) => {this.checkPage(e)}}>Friends' Clips</option>
                            </select>
                            <label className="upload__form-title">Date (mm.dd.yyyy):</label>
                            <input type="text" name="date" className="upload__form-input upload__form-input-date" placeholder="Add a date to your video"/>
                            <label className="upload__form-title">Agent Name:</label>
                            <select className="upload__form-dropdown upload__form-input" name="agent">
                                <option className="upload__form-dropdown-option">Which agent is being used?</option>
                                <option className="upload__form-dropdown-option">Astra</option>
                                <option className="upload__form-dropdown-option">Breach</option>
                                <option className="upload__form-dropdown-option">Brimstone</option>
                                <option className="upload__form-dropdown-option">Jett</option>
                                <option className="upload__form-dropdown-option">KAY/O</option>
                                <option className="upload__form-dropdown-option">Killjoy</option>
                                <option className="upload__form-dropdown-option">Omen</option>
                                <option className="upload__form-dropdown-option">Phoenix</option>
                                <option className="upload__form-dropdown-option">Raze</option>
                                <option className="upload__form-dropdown-option">Reyna</option>
                                <option className="upload__form-dropdown-option">Sage</option>
                                <option className="upload__form-dropdown-option">Sova</option>
                                <option className="upload__form-dropdown-option">Skye</option>
                                <option className="upload__form-dropdown-option">Viper</option>
                                <option className="upload__form-dropdown-option">Yoru</option>
                            </select>
                            <label className="upload__form-title">Video URL/Path (include .mp4):</label>
                            <input type="text" name="video" className="upload__form-input upload__form-input-video" placeholder="Where can we get the video?"/>
                            <label className="upload__form-title">Description:</label>
                            <input type="text" name="description" className="upload__form-input upload__form-input-description" placeholder="What's happening in the clip?"/>
                            <label className="upload__form-title">Code:</label>
                            <input type="text" name="code" className="upload__form-input upload__form-input-code" placeholder="What's the secret code?"/>
                            <div className="upload__form-options">
                                <button className="upload__form-options-button upload__form-options-button--submit">Submit</button>
                                <button className="upload__form-options-button upload__form-options-button--cancel" onClick={(e) => this.cancelForm(e)}>Cancel</button>
                            </div>
                        </form>
                    
                </div>
            </div>
        )
    }
}

export default Upload
