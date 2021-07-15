import React from 'react';
import axios from 'axios';
import './upload.scss';
import Brim from '../../assets/images/brimmy.gif';

function Upload() {

    // function cancelForm() {
    //     const uploadForm = document.querySelector('.upload-section__form');
    //     uploadForm.reset();
    // };

    // uploadVideo = (e) => {
    //     e.preventDefault();
    //     this.cancelForm();
    //     window.scrollTo(0, 0);
    

    // const newVideo = {
    //     id: 1,
    //     date: e.target.date.value,
    //     agent: e.target.date.value,
    //     video: e.target.video.value,
    //     description: e.target.description.value
    // }

    // axios.post('/videos', newVideo)
    //         .catch(err => console.log(err));

    //         alert('New Video Successfully Uploaded!');
    //     };

    return (
        <div className="upload">
            <div className="clips__heading-box"></div>
                <div className="clips__heading">
                    <div className="clips__heading-text">Upload</div>
                </div>
            <div className="upload__container">
                <img src={Brim} className="upload__container-brim" alt="Brimstone Gif"/>
                
                    <form className="upload__form" /*onSubmit={this.uploadVideo}*/>
                        <label className="upload__form-title">Date Your Video (mm.dd.yyyy)</label>
                        <br/><input type="text" name="date" className="upload__form-input upload__form-input-date" placeholder="Add a date to your video"/>
                        <br/><label className="upload__form-title">Agent Name</label>
                        <br/><input type="text" name="agent" className="upload__form-input upload__form-input-agent" placeholder="What agent is being used?"/>
                        <br/><label className="upload__form-title">Video URL/Path</label>
                        <br/><input type="text" name="date" className="upload__form-input upload__form-input-date" placeholder="Where can we get the video?"/>
                        <br/><label className="upload__form-title">Description</label>
                        <br/><input type="text" name="description" className="upload__form-input upload__form-input-description" placeholder="What's happening in the clip?"/>
                        <div className="upload__form-options">
                            <button className="upload__form-options-button upload__form-options-button--submit">Submit</button>
                            <button className="upload__form-options-button upload__form-options-button--cancel" /*onClick={this.cancelForm}*/>Cancel</button>
                        </div>
                    </form>
                
            </div>
        </div>
    )
}

export default Upload
