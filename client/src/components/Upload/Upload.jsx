import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import $ from 'jquery';
import './upload.scss';
import Brim from '../../assets/images/brimmy.gif';

function Upload() {

    function cancelForm (e) {
        const uploadForm = document.querySelector('.upload__form');
        uploadForm.reset();
        e.preventDefault();
    };

    function uploadVideo(e) {
        e.preventDefault();

        // const generatedId = uuidv4();
        
        const newVideo = {
            // id: generatedId,
            date: e.target.date.value,
            agent: e.target.agent.value,
            video: e.target.video.value,
            description: e.target.description.value
        }

        if (e.target.code.value === "696969" && e.target.page.value === "Chawpsticks' Clips") {
            axios.post('/clips', {
                date: e.target.date.value,
                agent: e.target.agent.value,
                video: e.target.video.value,
                description: e.target.description.value
            })
            .catch(err => console.log(err));
            console.log(newVideo)
            
            alert('New Video Successfully Uploaded!');
            cancelForm(e);
            document.querySelector('.nav-list__link-clips').click();

        } else if (e.target.code.value === "696969" && e.target.page.value === "Friends' Clips") {
            axios.post('/friendsclips', {
                date: e.target.date.value,
                agent: e.target.agent.value,
                video: e.target.video.value,
                description: e.target.description.value
            })
            .catch(err => console.log(err));
            console.log(newVideo)
            
            alert('New Video Successfully Uploaded!');
            cancelForm(e);
            setTimeout(refreshPage, 3000);

        } else {
            alert('The Code You Entered Was Incorrect, Upload Not Complete');
        }   
    };

    function refreshPage() {
        document.querySelector('.nav-list__link-friendsclips').click()
    }

    $(document).ready(function() {
  
        $("#page").change(function() {
          
            let el = $(this) ;
            
            if(el.val() === "Chawpsticks' Clips" ) {
                $(".upload__form-dropdown-option--friend").hide();
                $(".upload__form-dropdown-option--divider").hide();
                $(".upload__form-dropdown-option--agent").show();
            } else if(el.val() === "Friends' Clips" ) {
                $(".upload__form-dropdown-option--agent").hide();
                $(".upload__form-dropdown-option--divider").hide(); 
                $(".upload__form-dropdown-option--friend").show();
            } else {
                $(".upload__form-dropdown-option--agent").show();
                $(".upload__form-dropdown-option--divider").show(); 
                $(".upload__form-dropdown-option--friend").show();
            }
        });  
    });

    return (
        <div className="upload">
            <div className="clips__heading-box"></div>
                <div className="clips__heading">
                    <div className="clips__heading-text">Upload</div>
                </div>
            <div className="upload__container">
                <img src={Brim} className="upload__container-brim" alt="Brimstone Gif"/>
                <form className="upload__form" onSubmit={(e) => uploadVideo(e)}>
                    <label className="upload__form-title">Page:</label>
                    <select className="upload__form-dropdown upload__form-input" name="page" id="page">
                        <option className="upload__form-dropdown-option">Which page is this for?</option>
                        <option className="upload__form-dropdown-option">Chawpsticks' Clips</option>
                        <option className="upload__form-dropdown-option">Friends' Clips</option>
                    </select>
                    <label className="upload__form-title">Date (mm.dd.yyyy):</label>
                    <input type="text" name="date" className="upload__form-input upload__form-input-date" placeholder="Add a date to your video"/>
                    <label className="upload__form-title">Agent Name:</label>
                    <select className="upload__form-dropdown upload__form-input" name="agent" id="agent">
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Who is it?</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Astra</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Breach</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Brimstone</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Jett</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">KAY/O</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Killjoy</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Omen</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Phoenix</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Raze</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Reyna</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Sage</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Sova</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Skye</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Viper</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--agent">Yoru</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--divider">-------</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--friend">Andrew</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--friend">Bruce</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--friend">Ian</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--friend">Kyle</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--friend">Raymond</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--friend">Tim</option>
                    </select>
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
