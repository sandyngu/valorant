import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import './upload.scss';
import Brim from '../../assets/images/brimmy.gif';
import Error from '../../assets/images/error.png';


function Upload() {

    function cancelForm (e) {
        const uploadForm = document.querySelector('.upload__form');
        uploadForm.reset();
    };

    function uploadVideo(e) {
        e.preventDefault();
        
        const newVideo = {
            date: e.target.date.value,
            agent: e.target.agent.value,
            video: e.target.video.value,
            description: e.target.description.value
        }

        let map = '';
        if (e.target.poster.value === 'Ascent') {
            map = 'https://i.postimg.cc/4xdQnsBs/ascent.png'
        } else if (e.target.poster.value === 'Bind') {
            map = 'https://i.postimg.cc/m2sDpk7g/bind.png'
        } else if (e.target.poster.value === 'Breeze') {
            map = 'https://i.postimg.cc/kM8GyK6H/breeze.png'
        } else if (e.target.poster.value === 'Fracture') {
            map = 'https://i.postimg.cc/xCZwxPy9/fracture.png'
        } else if (e.target.poster.value === 'Haven') {
            map = 'https://i.postimg.cc/W19147Cd/haven.png'
        } else if (e.target.poster.value === 'Icebox') {
            map = 'https://i.postimg.cc/SxQKqPT0/icebox.png'
        } else if (e.target.poster.value === 'Split') {
            map = 'https://i.postimg.cc/bN9v7PRH/split.png'
        }

        if (e.target.page.value === 'Which page is this for?') {
            document.querySelector('.upload__form-input-page').classList.add('error');
        } if (e.target.agent.value === 'Who is it?') {
            document.querySelector('.upload__form-input-agent').classList.add('error');
        } if (e.target.date.value === '') {
            document.querySelector('.upload__form-input-date').classList.add('error');
        } if (e.target.video.value === '') {
            document.querySelector('.upload__form-input-video').classList.add('error');
        } if (e.target.description.value === '') {
            document.querySelector('.upload__form-input-description').classList.add('error');
        } if (e.target.poster.value === 'What map is it?') {
            document.querySelector('.upload__form-input-poster').classList.add('error');
        } if (e.target.code.value === '') {
            document.querySelector('.upload__form-input-code').classList.add('error');
        }
        document.querySelector('.upload__form-error').style.display="inline-block";

        if (e.target.code.value === "696969" && e.target.page.value === "Chawpsticks' Clips") {
            axios.post('/clips', {
                date: e.target.date.value,
                agent: e.target.agent.value,
                video: e.target.video.value,
                description: e.target.description.value,
                poster: map
            })
            .catch(err => console.log(err));
            console.log(newVideo)
            
            alert('New video successfully uploaded!');
            cancelForm(e);
            setTimeout(refreshClipsPage, 1000);

        } else if (e.target.code.value === "696969" && e.target.page.value === "Friends' Clips") {
            axios.post('/friendsclips', {
                date: e.target.date.value,
                agent: e.target.agent.value,
                video: e.target.video.value,
                description: e.target.description.value,
                poster: map
            })
            .catch(err => console.log(err));
            console.log(newVideo)
            
            alert('New video successfully uploaded!');
            cancelForm(e);
            setTimeout(refreshFriendsClipsPage, 1000);

        } else {
            alert('Something went wrong. Upload NOT completed.');
        }
    };

    function refreshClipsPage() {
        document.querySelector('.nav-list__link-clips').click()

        $(document).ready(function(){
            var divTop = $('.clips__video-container').height();
            $('html, body').animate({ scrollTop: divTop }, 'slow');

            var div = $('.clips__video-container');

            div.animate({
                scrollTop: div[0].scrollHeight
            }, 1000);
        });   
    }

    function refreshFriendsClipsPage() {
        document.querySelector('.nav-list__link-friendsclips').click()
        
        $(document).ready(function() {
            var divTop = $('.clips__video-container').height();
            $('html, body').animate({ scrollTop: divTop }, 'slow');
        })
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
                    <select className="upload__form-input upload__form-input-dropdown upload__form-input-page" name="page" id="page">
                        <option className="upload__form-dropdown-option">Which page is this for?</option>
                        <option className="upload__form-dropdown-option">Chawpsticks' Clips</option>
                        <option className="upload__form-dropdown-option">Friends' Clips</option>
                    </select>
                    <label className="upload__form-title">Date:</label>
                    <br/><input type="date" name="date" className="upload__form-input upload__form-input-date" id="date"/>
                    <label className="upload__form-title">Agent Name:</label>
                    <select className="upload__form-input upload__form-input-dropdown upload__form-input-agent" name="agent" id="agent">
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
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--friend">Jenny</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--friend">Kyle</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--friend">Raymond</option>
                        <option className="upload__form-dropdown-option upload__form-dropdown-option--friend">Tim</option>
                    </select>
                    <label className="upload__form-title">Video URL/Path:</label>
                    <input type="text" name="video" className="upload__form-input upload__form-input-video" placeholder="Where can we get the video?" id="video"/>
                    <label className="upload__form-title">Description:</label>
                    <input type="text" name="description" className="upload__form-input upload__form-input-description" placeholder="What's happening in the clip?" id="description"/>
                    <label className="upload__form-title">Map:</label>
                    <select className="upload__form-input upload__form-input-dropdown upload__form-input-poster" name="poster" id="poster">
                        <option className="upload__form-dropdown-option">What map is it?</option>
                        <option className="upload__form-dropdown-option">Ascent</option>
                        <option className="upload__form-dropdown-option">Bind</option>
                        <option className="upload__form-dropdown-option">Breeze</option>
                        <option className="upload__form-dropdown-option">Fracture</option>
                        <option className="upload__form-dropdown-option">Haven</option>
                        <option className="upload__form-dropdown-option">Icebox</option>
                        <option className="upload__form-dropdown-option">Split</option>
                    </select>
                    <label className="upload__form-title">Code:</label>
                    <input type="text" name="code" className="upload__form-input upload__form-input-code" placeholder="What's the secret code?" id="code"/>
                    <div className="upload__form-error upload__form-error--hide"><img src={Error} alt="Error Icon" className="upload__form-error-icon"/> Please fix the highlighted fields before submission.</div>
                    <div className="upload__form-options">
                        <button className="upload__form-options-button upload__form-options-button--submit">Submit</button>
                        <button className="upload__form-options-button upload__form-options-button--cancel" /*onClick={(e) => cancelForm(e)}*/ onClick={()=>refreshClipsPage()}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Upload
