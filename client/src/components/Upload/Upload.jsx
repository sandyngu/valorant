import React from 'react';
import axios from 'axios';
import './upload.scss';
import Brim from '../../assets/images/brimmy.gif';

function Upload() {

    function cancelForm(e) {
        const uploadForm = document.querySelector('.upload__form');
        uploadForm.reset();
        e.preventDefault();
    };

    function uploadVideo(e) {
        e.preventDefault();
        
        const newVideo = {
            id: 1,
            date: e.target.date.value,
            agent: e.target.agent.value,
            video: e.target.video.value,
            description: e.target.description.value
        }

        if (e.target.code.value == 696969) {
            axios.post('/clips', {newVideo})
            .catch(err => console.log(err));
            console.log(newVideo)
            
            alert('New Video Successfully Uploaded!');
            cancelForm(e);
            document.querySelector('.nav-list__link-clips').click();
        } else {
            alert('The Code You Entered Was Incorrect, Upload Not Complete');
        }
        
        };

    return (
        <div className="upload">
            <div className="clips__heading-box"></div>
                <div className="clips__heading">
                    <div className="clips__heading-text">Upload</div>
                </div>
            <div className="upload__container">
                <img src={Brim} className="upload__container-brim" alt="Brimstone Gif"/>
                
                    <form className="upload__form" onSubmit={(e) => {uploadVideo(e)}} /*onSubmit={(e) => seeData(e)}*/>
                        <label className="upload__form-title">Date (mm.dd.yyyy):</label>
                        <input type="text" name="date" className="upload__form-input upload__form-input-date" placeholder="Add a date to your video"/>
                        <label className="upload__form-title">Agent Name:</label>
                        <input type="text" name="agent" className="upload__form-input upload__form-input-agent" placeholder="What agent is being used?"/>
                        <label className="upload__form-title">Video URL/Path (include .mp4):</label>
                        <input type="text" name="video" className="upload__form-input upload__form-input-video" placeholder="Where can we get the video?"/>
                        <label className="upload__form-title">Description:</label>
                        <input type="text" name="description" className="upload__form-input upload__form-input-description" placeholder="What's happening in the clip?"/>
                        <label className="upload__form-title">Code:</label>
                        <input type="text" name="code" className="upload__form-input upload__form-input-code" placeholder="What's the secret code?"/>
                        <div className="upload__form-options">
                            <button className="upload__form-options-button upload__form-options-button--submit">Submit</button>
                            <button className="upload__form-options-button upload__form-options-button--cancel" onClick={(e) => cancelForm(e)}>Cancel</button>
                        </div>
                    </form>
                
            </div>
        </div>
    )
}

export default Upload
